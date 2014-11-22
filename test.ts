/// <reference path="./lib/node-0.11.d.ts" />
/// <reference path="./lib/nodeunit.d.ts" />


import child_process = require('child_process');
import fs = require('fs');
import nodeunit = require('nodeunit');


// the first line of the output contains the date, so we can't compare it safely
function removeFirstLine(s: string):string {
    var i = s.indexOf('\n');
    return s.substring(i + 1);
}


exports.testGenerator = function(test: nodeunit.Test):void {
    test.expect(1);

    child_process.exec('tsc --module commonjs generator.ts && node generator.js ./test-data/jsduck ./test-data/actual-output.d.ts', function() {

        var actual = fs.readFileSync('./test-data/actual-output.d.ts', 'utf8'),
            expected = fs.readFileSync('./test-data/expected-output.d.ts', 'utf8');

        fs.unlinkSync('./test-data/actual-output.d.ts');

        test.equal(removeFirstLine(actual), removeFirstLine(expected));
        test.done();
    });
};