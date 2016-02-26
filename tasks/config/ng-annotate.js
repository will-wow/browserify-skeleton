/**
 * Add annotations for easier direct injection.
 *
 * ---------------------------------------------------------------
 *
 * Add, remove and rebuild AngularJS dependency injection annotations.
 *
 * For usage docs see:
 * 		https://github.com/mzgol/grunt-ng-annotate
 *
 */
module.exports = function(grunt) {
	grunt.log.writeln("ng-annotate registered");

	grunt.config.set('ngAnnotate', {
    options: {
        add: true,
        singleQuotes: true
    },
		app: {
			files: {
				'dev/public/js/main.js': ['dev/public/js/main.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-ng-annotate');
};