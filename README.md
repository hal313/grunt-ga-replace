[![Build Status](https://travis-ci.org/hal313/grunt-ga-replace.svg?branch=master)](https://travis-ci.org/hal313/grunt-ga-replace)
[![npm version](https://badge.fury.io/js/grunt-ga-replace.svg)](https://badge.fury.io/js/grunt-ga-replace)

# grunt-ga-replace
> Replaces Google Analytics property ID's.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ga-replace --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ga-replace');
```

## The "ga-replace" task

### Overview
In your project's Gruntfile, add a section named `ga-replace` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ga-replace: {
    options: {
        // The property id to use
        propertyId: 'UA_PROPERTY_ID'
    },
    // Standard grunt file specifications
    files: [{
        src: ['src/index.html'],
        dest: 'dist/index.html'
    }]
  },
});
```

### Options

#### options.type
Type: `string`
Default value: `auto`

The GA type ('auto', 'ga', 'analytics'); if you are unsure, select 'auto'. This is used as a guide for setting the
regular expression to replace. Based on the Google documentation, the 'analytics' pattern is 'UA-XXXXX-Y' and the 'ga'
pattern is 'UA-XXXXX-X'. If you have a hard-coded value (used in local development, for example), look at the `from`
option.


#### options.propertyId
Type: `string`
Default value: undefined

The property ID to place in the processed file



#### options.from
Type: `string`
Default value: none

The regular expression used to search for the string to replace. This can be an array of strings if there are multiple
values to search for.



### Usage Examples

#### Default Options
In this example, the file index.html has the property ID set to a specific property ID based on the build.

```js
grunt.initConfig({
  ga-replace: {
    files: {
      src: ['src/index.html'],
      dest: 'dist/index.html'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).