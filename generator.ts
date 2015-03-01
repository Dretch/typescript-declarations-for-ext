/// <reference path="./lib/node-0.11.d.ts" />
/// <reference path="./lib/jsesc.d.ts" />


import fs = require('fs');
import path = require('path');
import jsesc = require('jsesc');


// This describes a subset of what JSDuck seems to produce when given the
// "--export=full" switch. There are no offical docs regarding this format.
module jsduck {

    export interface Class {
        name: string;
        alternateClassNames: string[];
        extends: string;
        singleton: boolean;
        members: Member[];
        mixins: string[];
        enum?: { type: string }
    }

    export interface Member {
        tagname: string;
        name: string;
        type: string;
        private: boolean;
        protected: boolean;
        owner: string;
        static: boolean;
        optional: boolean;
        overrides: { name: string; owner: string; }[];
        params: Param[];
        return: Param;
    }

    export interface Param {
        tagname: string;
        name: string;
        type: string;
        optional: boolean;
        properties?: Param[];
    }

}


var TYPESCRIPT_KEYWORDS = [
        'class', 'const', 'enum', 'export', 'extends', 'import', 'super',
        'implements', 'interface', 'let', 'package', 'private', 'protected',
        'public', 'static', 'yield'
    ],
    SPECIAL_CASE_TYPE_MAPPINGS = {
        '*':             'any',
        'Arguments':     'any',
        'Array':         'any[]',
        'boolean':       'boolean',
        'Boolean':       'boolean',
        'CSSStyleSheet': 'CSSStyleSheet',
        'CSSStyleRule':  'CSSStyleRule',
        'Date':          'Date',
        'Error':         'Error',
        'Event':         'Event',
        'Function':      'Function',
        'HtmlElement':   'HTMLElement',
        'HTMLElement':   'HTMLElement',
        'null':          'void',
        'number':        'number',
        'Number':        'number',
        'NodeList':      'NodeList',
        'Mixed':         'any',
        'Object':        'any',
        'RegExp':        'RegExp',
        'string':        'string',
        'String':        'string',
        'TextNode':      'Text',
        'undefined':     'void',
        'XMLElement':    'any'
    };


// Places quotes around the given property name, if necessary
function quote(name: string):string {
    // due to unicode this is conservative, not precise, but that is OK
    var needs_quotes = !/^[a-zA-Z$_][a-zA-Z$_0-9]*$/.test(name);
    return needs_quotes ? ("'" + jsesc(name) + "'") : name;
}


function readClasses(inputDir: string):jsduck.Class[] {

    var classes = [],
        files = fs.readdirSync(inputDir);

    for (var i=0; i<files.length; i++) {

        var file = files[i],
            jsonPath = path.join(inputDir, file),
            cls = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

        if (file.indexOf('Ext.') == 0) { // ignore non-Ext files

            if (cls.tagname != 'class') {
                throw 'Unknown top level tagname: ' + cls.tagname;
            }

            // workaround wierdness in the JSDuck output
            if (cls.name == 'Ext.Error') {
                cls.extends = '';
            }

            classes.push(cls);
        }
    }

    return classes;
}


function groupClassesByModule(classes: jsduck.Class[]):{name: string; classes: jsduck.Class[]}[] {

    var modulesDict = {};

    for (var i=0; i<classes.length; i++) {

        var cls = classes[i],
            moduleName = cls.name.substring(0, cls.name.lastIndexOf('.'));

        modulesDict[moduleName] = modulesDict[moduleName] || [];
        modulesDict[moduleName].push(cls);
    }

    var modulesList = [];
    for (var module in modulesDict) {
        if (modulesDict.hasOwnProperty(module)) {
            modulesList.push({
                name: module,
                classes: modulesDict[module]
            });
        }
    }
    modulesList.sort(function(a, b) {
        return (a.name == b.name) ? 0 : (a.name < b.name ? -1 : 1);
    });
    return modulesList;
}


// TODO: support closure syntax...
function convertFromExtType(classes: jsduck.Class[],
                            senchaType: string,
                            properties?: jsduck.Param[]):string {

    function mapSubType(typ:string, needsBracket:boolean):string {

        var arrays = /(\[])*$/.exec(typ)[0];

        if (arrays) {
            typ = typ.substring(0, typ.length - arrays.length);
        }

        if (typ === 'Function' && properties) {

            // if no return type is specified, assume any - it is not safe to assume void
            var params = [],
                retTyp = 'any';

            properties.forEach(function(property) {
                if (property.name === 'return') {
                    retTyp = convertFromExtType(classes, property.type, property.properties);
                }
                else {
                    var opt = property.optional ? '?: ' : ': ',
                        typ = convertFromExtType(classes, property.type, property.properties);
                    params.push(property.name + opt + typ);
                }
            });

            var fnType = '(' + params.join(', ') + ') => ' + retTyp;
            return (needsBracket || arrays ? ('(' + fnType + ')') : fnType) + arrays;
        }
        else if (SPECIAL_CASE_TYPE_MAPPINGS.hasOwnProperty(typ)) {
            return SPECIAL_CASE_TYPE_MAPPINGS[typ] + arrays;
        }
        else {
            try {
                var cls = lookupClass(classes, typ);
            }
            catch (e) {
                console.warn('Warning: unable to find class, using "any" instead: "' + typ + '"');
                return 'any';
            }
            // enum types (e.g. Ext.enums.Widget) need special handling
            return (cls.enum ? convertFromExtType(classes, cls.enum.type) : cls.name) + arrays;
        }
    }

    var subTypes = senchaType.replace(/ /g, '').split(/[|\/]/),
        mappedSubTypes = subTypes.map(function(t) { return mapSubType(t, subTypes.length > 1); });

    // any union type containing "any" is equivalent to "any"!
    for (var i=0; i<mappedSubTypes.length; i++) {
        if (mappedSubTypes[i] === 'any') {
            return 'any';
        }
    }

    return mappedSubTypes.join('|');
}


function escapeParamName(name: string):string {
    var keyword = TYPESCRIPT_KEYWORDS.indexOf(name) != -1;
    return keyword ? (name + '_') : name;
}


function normalizeClassName(classes: jsduck.Class[], name: string):string {
    return lookupClass(classes, name).name;
}


function lookupClass(classes: jsduck.Class[], name: string):jsduck.Class {
    for (var i=0; i<classes.length; i++) {
        var cls = classes[i];
        if (cls.name == name) {
            return cls;
        }
        for (var j=0; cls.alternateClassNames && j<cls.alternateClassNames.length; j++) {
            if (cls.alternateClassNames[j] == name) {
                return cls;
            }
        }
    }
    throw "Class not found: " + name;
}


function lookupMember(members: jsduck.Member[], name: string, tagname?: string, static?: boolean):jsduck.Member {
    for (var i=0; i<members.length; i++) {
        var member = members[i];
        if (member.name === name &&
            (typeof tagname !== 'string' || member.tagname === tagname) &&
            (typeof static !== 'boolean' || !!member.static === static)) {
            return member;
        }
    }
    return null;
}


// Whether the visibility rules say we should emit this member
function isMemberVisible(cls: jsduck.Class, member: jsduck.Member):boolean {

    return member.protected ? (!cls.singleton && !member.static) : !member.private;
}


// Test if one of the parent classes of the given class will emit the given member
function parentIncludesMember(classes: jsduck.Class[],
                              cls: jsduck.Class,
                              memberName: string,
                              staticSide:boolean):boolean {

    if (!cls.extends) {
        return false;
    }

    var parentCls = lookupClass(classes, cls.extends);

    if (parentIncludesMember(classes, parentCls, memberName, staticSide)) {
        return true;
    }

    var member = lookupMember(parentCls.members, memberName, null, staticSide);

    return member && isMemberVisible(parentCls, member);
}


function writeMember(classes: jsduck.Class[],
                     cls: jsduck.Class,
                     members: jsduck.Member[],
                     member: jsduck.Member,
                     indent: string,
                     output: string[]):void {

    var constructor = member.tagname === 'method' && member.name === 'constructor';

    // don't repeat inherited members, because they are already in the parent class
    // Ext sometimes has overrides with incompatible types too, which is weird.
    if (cls.singleton) {
        if (member.static || constructor || !isMemberVisible(cls, member)) {
            return;
        }
    } else {
        if (!constructor && (!isMemberVisible(cls, member) || parentIncludesMember(classes, cls, member.name, member.static))) {
            return;
        }
    }

    var staticStr = (cls.singleton || member.static) ? 'static ' : '';

    if (member.tagname === 'property') {
    
        // workaround a curiosity in Ext5
        if (lookupMember(members, member.name, 'method')) {
            console.warn('Warning: omitting property that also exists as a method: ' + cls.name + '.' + member.name);
            return;
        }

        var opt = member.optional ? '?: ' : ': ',
            typ = convertFromExtType(classes, member.type),
            configTag = lookupMember(members, member.name, 'cfg');

        if (!cls.singleton && configTag) {
            typ = convertFromExtType(classes, configTag.type + '|' + member.type);
        }

        output.push(indent + '    ' + staticStr + quote(member.name) + opt + typ + ';');
    }
    else if (member.tagname === 'method') {
        
        var params = [],
            prevParamNames = {},
            retTyp = member.return ? convertFromExtType(classes, member.return.type, member.return.properties) : 'void',
            retStr = constructor ? '' : ':' + retTyp,
            optional = false;
        
        for (var i=0; i<member.params.length; i++) {

            var param = member.params[i],
                paramName = escapeParamName(param.name),
                typ = param.type;

            // Ext 5.1.0 has some duplicate parameter names!
            while (prevParamNames[paramName]) {
                paramName = '_' + paramName;
            }

            // after one optional parameter, all the following parameters must also be optional
            optional = optional || param.optional;
                
            if (/\.\.\.$/.test(typ)) {
            
                paramName = '...' + paramName;
                typ = typ.substring(0, typ.length - '...'.length) + '[]';
                optional = false;
                
                // deal with types like string|number
                if (/[|\/]/.test(typ)) {
                    typ = 'Mixed[]';
                }
                
                // Typescript can't have parameters after a ...param, so we have to relax the type
                if (i < member.params.length - 1) {
                    typ = 'Mixed[]';
                    i = member.params.length; // skip remaining params
                }
            }
            
            typ = convertFromExtType(classes, typ, param.properties);
            
            params.push(paramName + (optional ? '?: ' : ': ') + typ);
            prevParamNames[paramName] = true;
        }
        
        output.push(indent + '    ' + staticStr + quote(member.name) + '(' + params.join(', ') + ')' + retStr + ';');
    }
    else if (member.tagname === 'cfg') {

        if (lookupMember(members, member.name, 'method') || lookupMember(members, member.name, 'property')) {
            return; // we will emit the method/property tag instead
        }

        if (!cls.singleton) {
            var typ = convertFromExtType(classes, member.type);
            output.push(indent + '    ' + staticStr + quote(member.name) + ': ' + typ + ';');
        }
    }
}


// TODO: include docs in the generated file
function writeTransformedClasses(classes: jsduck.Class[], outputFile: string):void {

    var modules = groupClassesByModule(classes),
        output = [];

    output.push('// Ext type declarations (Typescript 1.4 or newer) generated on ' + new Date());
    output.push('// For more information, see: https://github.com/Dretch/typescript-declarations-for-ext');

    for (var i=0; i<modules.length; i++) {
    
        var module = modules[i],
            indent = module.name ? '    ' : '';

        if (module.name) {
            output.push('declare module ' + module.name + ' {');
        }

        for (var j=0; j<module.classes.length; j++) {

            var cls = module.classes[j],
                name = cls.name.substring(cls.name.lastIndexOf('.') + 1),
                modifier = module.name ? 'export' : 'declare',
                normalizedParent = null;

            // Ext 5.0.1 has some classes extending non-existent parent classes!
            try {
                normalizedParent = cls.extends && normalizeClassName(classes, cls.extends);
            }
            catch(e) {
                console.warn('Warning: unable to find parent class, so omitting extends clause: ' + cls.extends);
            }

            var extend = !cls.singleton && normalizedParent ? ' extends ' + normalizedParent : '';

            output.push(indent + modifier + ' class ' + name + extend + ' {');
            cls.members.forEach(function(member) {
                writeMember(classes, cls, cls.members, member, indent, output);
            });
            output.push(indent + '}');
        }

        if (module.name) {
            output.push('}');
        }
    }

    fs.writeFileSync(outputFile, output.join('\r\n'));
}


if (process.argv.length <= 2) {
    console.error('This script needs two arguments: [input-folder-containing-jsduck-export] [output-file]');
}
else {
    var classes = readClasses(process.argv[2]);
    writeTransformedClasses(classes, process.argv[3]);
    console.log('Wrote ' + classes.length + ' class declarations into ' + process.argv[3]);
}

