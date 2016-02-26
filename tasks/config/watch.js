/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {
	grunt.log.writeln("Watch registered");
	grunt.config.set('watch', {
		options: {
      livereload: true,
    },
		scss: {
			files: ['source/**/*.scss'],
			tasks: ['sass:dev']
		},
		assets: {
			// Assets to watch:
			files: ['source/**/*.json', 'source/**/*.!(js)', 'tasks/pipeline.js', '!**/node_modules/**'],

			// When source are changed:
			tasks: ['sync:dev']
		},
		browserify: {
			// Just a task so livereload works.
			files: ['dev/public/js/main.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
