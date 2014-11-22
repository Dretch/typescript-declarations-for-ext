/// <reference path="./lib/node-0.11.d.ts" />


import fs = require('fs');
import path = require('path');


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


function readClasses(inputDir: string):jsduck.Class[] {

    var classes = [],
        files = fs.readdirSync(inputDir);

    for (var i=0; i<files.length; i++) {

        var file = files[i],
            jsonPath = path.join(inputDir, file),
            cls = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

        if (cls.tagname != 'class') {
            throw 'Unknown top level tagname: ' + cls.tagname;
        }

        // workaround wierdness in the JSDuck output
        if (cls.name == 'Ext.Error') {
            cls.extends = '';
        }

        classes.push(cls);
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


// TODO: support function types
// TODO: support closure syntax...
// TODO: turn Object into any?
function convertFromExtType(classes: jsduck.Class[], senchaType: string):string {

    function translateSubType(typ:string):string {

        var arrays = /(\[\])*$/.exec(typ)[0];

        if (arrays) {
            typ = typ.substring(0, typ.length - arrays.length);
        }

        if (PRIMITIVE_WRAPPER_TYPES.indexOf(typ) != -1) {
            typ = typ.toLowerCase();
        }

        if (typ == 'Mixed') {
            return 'any' + arrays;
        }
        else if (typ == 'Array') {
            return 'any[]' + arrays;
        }
        else if (BUILT_IN_TYPES.indexOf(typ) != -1) {
            return typ + arrays;
        }
        else {
            return normalizeClassName(classes, typ) + arrays;
        }
    }
    
    senchaType = senchaType.replace(/ /g, '');
    var subTypes = senchaType.split(/[|\/]/);

    // union types are on the way, but not yet released!
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


function writeMember(classes: jsduck.Class[],
                     cls: jsduck.Class,
                     member: jsduck.Member,
                     indent: string,
                     output: string[]):void {

    var singleton = cls.singleton,
        isOverride = member.owner != cls.name || (member.overrides && member.overrides.length > 0),
        static = (singleton || member.static) ? 'static ' : '',
        mixin = cls.mixins && cls.mixins.indexOf(member.owner) != -1,
        constructor = member.tagname == 'method' && member.name == 'constructor';

    // don't repeat inherited members, because they are already in the parent class
    // Ext sometimes has overrides with incompatible types too, which is weird.
    if (member.private || (!singleton && !constructor && !mixin && isOverride) || (singleton && (member.static || constructor))) {
        return;
    }

    if (member.tagname == 'property') {
    
        var opt = member.optional ? '?: ' : ': ',
            typ = convertFromExtType(classes, member.type);
        
        output.push(indent + '    ' + static + member.name + opt + typ + ';');
    }
    else if (member.tagname == 'method') {
        
        var params = [],
            retTyp = member.return ? convertFromExtType(classes, member.return.type) : 'void',
            retStr = constructor ? '' : ':' + retTyp;
        
        for (var i=0; i<member.params.length; i++) {

            var param = member.params[i],
                paramName = escapeParamName(param.name),
                typ = param.type,
                optional = param.optional;
                
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
            
            typ = convertFromExtType(classes, typ);
            
            params.push(paramName + (optional ? '?: ' : ': ') + typ);
        }
        
        output.push(indent + '    ' + static + member.name + '(' + params.join(', ') + ')' + retStr + ';');
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
                extend = !cls.singleton && cls.extends ? ' extends ' + normalizeClassName(classes, cls.extends) : '',
                modifier = module.name ? 'export' : 'declare';

            output.push(indent + modifier + ' class ' + name + extend + ' {');
            for (var m=0; m<cls.members.length; m++) {
                writeMember(classes, cls, cls.members[m], indent, output);
            }
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

