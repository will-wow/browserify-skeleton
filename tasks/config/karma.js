/**
 * Runs Jasmine unit tests with Karma
 *
 * ---------------------------------------------------------------
 *
 * Grunt plugin for Karma
 *
 * For usage docs see:
 * 		https://github.com/karma-runner/grunt-karma
 *
 */

var istanbul = require('browserify-istanbul');

module.exports = function(grunt) {
	grunt.log.writeln("ng-annotate registered");

	grunt.config.set('karma', {
    options: {
      configFile: 'karma.conf.js'
    },
    serve: {
      autoWatch: true
    },
    coverage: {
      singleRun: true,

			browserify: {
	      debug: true,

				transform: [
					[{
						ignore: [
							'**/*-spec.js',
							'**/index.js',
							'**/js/config.js',
							'**/js/main.js',
							'**/js/routes/**/*.js',
							'**/test-utils/**',
							'**/*.html'
						],

					}, 'browserify-istanbul']
				]
	    },

			reporters: ['progress', 'coverage'],

	    coverageReporter: {
	      reporters: [
	        {type: 'html'},
	        {type: 'text-summary'}
	      ]
	    }
    }

	});

  grunt.loadNpmTasks('grunt-karma');
};
