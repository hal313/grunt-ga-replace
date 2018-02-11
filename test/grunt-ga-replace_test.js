(function() {
    'use strict';

    var grunt = require('grunt');

    /*
     ======== A Handy Little Nodeunit Reference ========
     https://github.com/caolan/nodeunit

     Test methods:
     test.expect(numAssertions)
     test.done()
     Test assertions:
     test.ok(value, [message])
     test.equal(actual, expected, [message])
     test.notEqual(actual, expected, [message])
     test.deepEqual(actual, expected, [message])
     test.notDeepEqual(actual, expected, [message])
     test.strictEqual(actual, expected, [message])
     test.notStrictEqual(actual, expected, [message])
     test.throws(block, [error], [message])
     test.doesNotThrow(block, [error], [message])
     test.ifError(value)
     */

    exports['ga-replace'] = {

        setUp: function(done) {
            // Setup here if necessary
            done();
        },

        'default-analytics': function(test) {
            var actual = grunt.file.read('test/actual/default-analytics.html');
            var expected = grunt.file.read('test/expected/default-analytics.html');

            test.equal(actual, expected, 'should replace only the analytics script');

            test.done();
        },
        'default-auto': function(test) {
            var actual = grunt.file.read('test/actual/default-auto.html');
            var expected = grunt.file.read('test/expected/default-auto.html');

            test.equal(actual, expected, 'should replace both the scripts (analytics and ga)');

            test.done();
        },
        'default-ga': function(test) {
            var actual = grunt.file.read('test/actual/default-ga.html');
            var expected = grunt.file.read('test/expected/default-ga.html');

            test.equal(actual, expected, 'should replace only the ga script');

            test.done();
        },
        'pattern-analytics': function(test) {
            var actual = grunt.file.read('test/actual/pattern-analytics.html');
            var expected = grunt.file.read('test/expected/pattern-analytics.html');

            test.equal(actual, expected, 'should replace only the analytics script');

            test.done();
        },
        'pattern-auto': function(test) {
            var actual = grunt.file.read('test/actual/pattern-auto.html');
            var expected = grunt.file.read('test/expected/pattern-auto.html');

            test.equal(actual, expected, 'should replace both the scripts (analytics and ga)');

            test.done();
        },
        'pattern-ga': function(test) {
            var actual = grunt.file.read('test/actual/pattern-ga.html');
            var expected = grunt.file.read('test/expected/pattern-ga.html');

            test.equal(actual, expected, 'should replace only the ga script');

            test.done();
        }

    };

}());