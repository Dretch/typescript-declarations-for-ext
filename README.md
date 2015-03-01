This takes JSDuck output (https://github.com/senchalabs/jsduck) and turns it into type declarations for Typescript (version 1.4+).

This is designed to be used in conjunction with fabioparra's patched Typescript compiler that emits ExtJS style classes (https://github.com/fabioparra/TypeScriptExtJSEmitter). ExtJS versions 4 and 5 are supported.


Pre-generated declaration files
===============================

There is a selection of pre-generated declarations files (for ExtJS 4 and 5) in the declarations folder. Make an issue if you would like to see another one, or generate it yourself (see below).


Generating your own declaration file
====================================

The easiest way to do this is probably to modify `generate-defaults.ts` and add another entry to the `EXT_VERSIONS` array. You can then run `npm install` to run the script.