/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {
	grunt.log.writeln("CSSmin registered");
	grunt.config.set('cssmin', {
		dist: {
			src: ['dev/public/css/styles.css'],
			dest: 'dev/public/css/styles.min.css'// the file will be copied later, so put it in dev
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
