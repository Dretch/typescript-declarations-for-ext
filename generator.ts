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
    }

    export interface Member {
        tagname: string;
        name: string;
        type: string;
        private: boolean;
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
    PRIMITIVE_WRAPPER_TYPES = [
        'Boolean',
        'Number',
        'String'
    ],
    BUILT_IN_TYPES = [
        'boolean',
        'number',
        'string',
        'undefined',
        'void',
        'Object',
        'String',
        'Number',
        'Boolean',
        'RegExp',
        'Function',
        'Array',
        'Arguments',
        'Date',
        'Error',
        'null',
        'HTMLElement',
        'XMLElement',
        'NodeList',
        'TextNode',
        'CSSStyleSheet',
        'CSSStyleRule',
        'Event'
    ];


// Places quotes around the given property name, if necessary
function quote(name: string):string {
    // due to unicode this is conservative, not precise, but thats OK
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
        modulesList.push({
            name: module,
            classes: modulesDict[module]
        });
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

    function translateSubType(typ:string):string {

        var arrays = /(\[\])*$/.exec(typ)[0];

        if (arrays) {
            typ = typ.substring(0, typ.length - arrays.length);
        }

        if (PRIMITIVE_WRAPPER_TYPES.indexOf(typ) != -1) {
            typ = typ.toLowerCase();
        }

        if (typ == 'undefined') {
            return 'void' + arrays;
        }
        else if (typ == 'Function' && properties) {

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

            return '(' + params.join(', ') + ') => ' + retTyp + arrays;
        }
        else if (typ == 'Object' || typ == 'Mixed' || typ == '*') {
            return 'any' + arrays;
        }
        else if (typ == 'Array') {
            return 'any[]' + arrays;
        }
        else if (BUILT_IN_TYPES.indexOf(typ) != -1) {
            return typ + arrays;
        }
        else {
            try {
                return normalizeClassName(classes, typ) + arrays;
            }
            catch (e) {
                console.warn('Warning: unable to find class, using "any" instead: "' + senchaType + '"');
                return 'any';
            }
        }
    }
    
    senchaType = senchaType.replace(/ /g, '');
    var subTypes = senchaType.split(/[|\/]/);

    // union types are on the way in Typescript 1.4, but that is not yet released!
    if (subTypes.length > 1) {
        return 'any';
    }
    else {
        return subTypes.map(translateSubType).join('|');
    }
}


function normalizeClassName(classes: jsduck.Class[], name: string):string {
    for (var i=0; i<classes.length; i++) {
        var cls = classes[i];
        if (cls.name == name) {
            return name;
        }
        for (var j=0; j<cls.alternateClassNames.length; j++) {
            if (cls.alternateClassNames[j] == name) {
                return cls.name;
            }
        }
    }
    throw "Class not found: " + name;
}


function escapeParamName(name: string):string {
    var keyword = TYPESCRIPT_KEYWORDS.indexOf(name) != -1;
    return keyword ? (name + '_') : name;
}


function lookupMember(members: jsduck.Member[], name: string, tagname: string):jsduck.Member {
    for (var i=0; i<members.length; i++) {
        var member = members[i];
        if (member.name == name && member.tagname == tagname) {
            return member;
        }
    }
    return null;
}


function writeMember(classes: jsduck.Class[],
                     cls: jsduck.Class,
                     members: jsduck.Member[],
                     member: jsduck.Member,
                     indent: string,
                     output: string[]):void {

    var singleton = cls.singleton,
        static = member.static,
        overrides = member.overrides,
        override = member.owner != cls.name || (overrides && overrides.length > 0),
        overrideFromMixin = overrides && overrides.length == 1 && cls.mixins && cls.mixins.indexOf(overrides[0].owner) != -1,
        mixin = cls.mixins && (cls.mixins.indexOf(member.owner) != -1 || overrideFromMixin),
        constructor = member.tagname == 'method' && member.name == 'constructor';

    // don't repeat inherited members, because they are already in the parent class
    // Ext sometimes has overrides with incompatible types too, which is weird.
    if (member.private || (!singleton && !constructor && !mixin && override) || (singleton && (static || constructor))) {
        return;
    }

    var staticStr = (singleton || static) ? 'static ' : '';

    if (member.tagname == 'property') {
    
        // workaround a curiousity in Ext5
        if (lookupMember(members, member.name, 'method')) {
            console.warn('Warning: omitting property that also exists as a method: ' + cls.name + '.' + member.name);
            return;
        }

        var opt = member.optional ? '?: ' : ': ',
            typ = convertFromExtType(classes, member.type);
        
        output.push(indent + '    ' + staticStr + quote(member.name) + opt + typ + ';');
    }
    else if (member.tagname == 'method') {
        
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
    else {
        // XXX: we could potentially do stuff with the cfg and event tags
    }
}


// TODO: include docs in the generated file
function writeTransformedClasses(classes: jsduck.Class[], outputFile: string):void {

    var modules = groupClassesByModule(classes),
        output = [];

    output.push('// Ext type declarations generated on ' + new Date());
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
    console.log('Wrote ' + classes.length + ' classes into ' + process.argv[3]);
}

