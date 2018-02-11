/*
 * grunt-ga-replace
 * https://github.com/hal313/grunt-ga-replace
 *
 * Copyright (c) 2018 John Ghidiu
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    'use strict';

    // Known types
    var TYPES = {
        auto: 'auto',
        analytics: 'analytics',
        ga: 'ga'
    };

    grunt.registerMultiTask('ga-replace', 'Replaces Google Analytics property ID\'s', function() {
        var patterns = {
                analytics: 'UA-XXXXX-Y',
                ga: 'UA-XXXXX-X'
            },
            options = this.options({
                type: 'auto'
            });

        // Set the patterns (if none are passed in)
        if (!options.from) {
            if (TYPES.auto === options.type) {
                // Get the keys from the patterns array
                options.from = Object.values(patterns);
            } else {
                // Be sure to create as an array (of 1)
                options.from = [patterns[options.type]];
            }
        }

        // Iterate over all specified file groups.
        this.files.forEach(function(file) {

            // Concat specified files.
            file.src.filter(function(filePath) {
                // Filter out files which do not exist
                if (!grunt.file.exists(filePath)) {
                    grunt.log.warn('Source file "' + filePath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            })

                .map(function(filePath) {
                    // Read file source.
                    var content = grunt.file.read(filePath);

                    // Output some debugging
                    grunt.verbose.ok('file', filePath);

                    // Convert options.from to an array (if it is not an array)
                    if ("array" !== grunt.util.kindOf(options.from)) {
                        grunt.verbose.ok('"options.from" is not an array; converting', filePath);
                        options.from = [options.from];
                    }

                    grunt.verbose.ok('options.from', options.from);

                    // Filter based on feature switch
                    options.from.forEach(function(pattern) {
                        content = content.replace(new RegExp(pattern, 'g'), options.propertyId);
                    });

                    // Write the file
                    grunt.file.write(file.dest, content);

                    // Print a success message.
                    grunt.log.writeln('File "' + file.dest + '" written.');
                });
        });

    });

};