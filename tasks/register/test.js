'use strict';

module.exports = function (grunt) {
	grunt.registerTask('test', 'run unit tests', function (type) {
		if (type === 'coverage') {
			grunt.task.run([
				'jshint', // run jshint on app folder
				'karma:coverage' // Run tests once with coverage reporting
			]);
		} else {
			grunt.task.run([
				'jshint', // run jshint on app folder
				'karma:serve' // Start up continuous unit tests
			]);
		}
	});
};
