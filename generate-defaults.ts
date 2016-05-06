/**
 * This script generates the default declaration files.
 *
 * It requires these external programs: tsc, wget, unzip and jsduck  (https://github.com/senchalabs/jsduck)
 */

/// <reference path="./lib/node-0.11.d.ts" />
/// <reference path="./lib/shelljs.d.ts" />

import fs = require('fs');
import shelljs = require('shelljs');


var TMP_DIR = process.env.EXT_TYPESCRIPT_DECLARATIONS_CACHE || '/tmp/typescript-declarations-for-ext',
    EXT_VERSIONS = [
        { name: 'ExtJS-4.1.0',     folder: 'extjs-4.1.0',   url: 'http://learningextjs.googlecode.com/files/ext-4.1.0-gpl.zip', jsduck_extra: ''},
        { name: 'ExtJS-4.2.0.663', folder: 'ext-4.2.0.663', url: 'http://cdn.sencha.com/ext/gpl/ext-4.2.0-gpl.zip', jsduck_extra: ''},
        { name: 'ExtJS-4.2.1.883', folder: 'ext-4.2.1.883', url: 'http://cdn.sencha.com/ext/gpl/ext-4.2.1-gpl.zip', jsduck_extra: '' },
        { name: 'ExtJS-5.0.1',     folder: 'ext-5.0.1',     url: 'http://cdn.sencha.com/ext/gpl/ext-5.0.1-gpl.zip', jsduck_extra: 'ext-5.0.1/packages/sencha-*' },
        { name: 'ExtJS-5.1.0',     folder: 'ext-5.1.0',     url: 'http://cdn.sencha.com/ext/gpl/ext-5.1.0-gpl.zip', jsduck_extra: 'ext-5.1.0/packages/sencha-*' }
    ];


EXT_VERSIONS.forEach(function(version) {

    var oldPwd = shelljs.pwd(),
        dir = TMP_DIR + '/' + version.name,
        testFileContent = '/// <reference path="' + oldPwd + '/declarations/' + version.name + '.d.ts" />';

    shelljs.mkdir('-p', dir);

    shelljs.cd(dir);
    shelljs.exec('wget --timestamping ' + version.url);
    shelljs.exec('unzip -uq *.zip');
    shelljs.mkdir('-p', version.folder + '.docs');
    shelljs.exec('jsduck ' + version.folder + '/src ' + version.jsduck_extra + ' --export=full --output ' + version.folder + '.docs');

    shelljs.cd(oldPwd);
    shelljs.exec('tsc --module commonjs generator.ts && node generator.js ' + dir + '/' + version.folder + '.docs ./declarations/' + version.name + '.d.ts');
    // check that Typescript accepts the generated file
    fs.writeFileSync(dir + '/test.ts', testFileContent);
    if (shelljs.exec('tsc ' + dir + '/test.ts').code != 0) {
        shelljs.echo('Generation failure on ' + version.name + ', see error messages above');
        shelljs.exit(1);
    }
});
