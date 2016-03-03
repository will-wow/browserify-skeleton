var path = require('path');
var _ = require('lodash');

module.exports = function (grunt) {
	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'tasks'),
		init: true
	});

	grunt.registerTask('default', [
		'clean:dev',
		'sass:dev',
		'browserify:dev',
		'sync',
		'htmlbuild:dev',
		'connect:dev',
		'watch'
	]);

	grunt.registerTask('build', [
		'jshint',
		'clean',
		'sass:prod',
		'browserify:prod',
		'sync',
		'ngAnnotate',
		'uglify',
		'htmlbuild:prod',
		'hashres:prod',
		'copy:prod'
	]);

	grunt.registerTask('servebuilt', [
		'connect:prod'
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
