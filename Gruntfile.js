var path = require('path');

module.exports = function (grunt) {
	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'tasks'),
		init: true
	});

	grunt.registerTask('default', [
		'clean:dev',
		'sass:dev',
		'browserify:dev',
		'sync:dev',
		'connect',
		'watch'
	]);

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
}
