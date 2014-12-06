This takes JSDuck output (https://github.com/senchalabs/jsduck) and turns it into type declarations for Typescript.

This is designed to be used in conjunction with fabioparra's patched Typescript compiler that emits ExtJS style classes (https://github.com/fabioparra/TypeScriptExtJSEmitter).


Pre-generated declaration file
==============================

There is a pre-generated declarations file for the latest (at time of writing) Ext 4 release in the declarations folder.


Generating your own declaration file
====================================

First, you need to run jsduck over the source of the Ext version you wish to use. You need to give the "--export=full" flag to jsduck. This will produce one .json file per Ext class. You then need to run the generator.ts file with node (after compiling it), passing in the path to the jsduck output.