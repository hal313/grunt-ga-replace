/*
 * grunt-ga-replace
 * https://github.com/hal313/grunt-ga-replace
 *
 * Copyright (c) 2018 John Ghidiu
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp', 'test/actual']
        },

        // Configuration to be run (and then tested).
        'ga-replace': {
            'default-analytics': {
                options: {
                    propertyId: 'UA-DEFAULT-GA',
                    type: 'analytics'
                },
                files: [{
                    src: ['test/source/default-index.html'],
                    dest: 'test/actual/default-analytics.html'
                }]
            },
            'default-auto': {
                options: {
                    propertyId: 'UA-DEFAULT-GA',
                    type: 'auto'
                },
                files: [{
                    src: ['test/source/default-index.html'],
                    dest: 'test/actual/default-auto.html'
                }]
            },
            'default-ga': {
                options: {
                    propertyId: 'UA-DEFAULT-GA',
                    type: 'ga'
                },
                files: [{
                    src: ['test/source/default-index.html'],
                    dest: 'test/actual/default-ga.html'
                }]
            },
            'pattern-analytics': {
                options: {
                    from: 'UA-12345678-9',
                    propertyId: 'UA-PATTERN-GA',
                    type: 'analytics'
                },
                files: [{
                    src: ['test/source/pattern-index.html'],
                    dest: 'test/actual/pattern-analytics.html'
                }]
            },
            'pattern-auto': {
                options: {
                    from: 'UA-12345678-9',
                    propertyId: 'UA-PATTERN-GA',
                    type: 'auto'
                },
                files: [{
                    src: ['test/source/pattern-index.html'],
                    dest: 'test/actual/pattern-auto.html'
                }]
            },
            'pattern-ga': {
                options: {
                    from: 'UA-12345678-9',
                    propertyId: 'UA-PATTERN-GA',
                    type: 'ga'
                },
                files: [{
                    src: ['test/source/pattern-index.html'],
                    dest: 'test/actual/pattern-ga.html'
                }]
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'ga-replace', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};