/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(grunt) {
	grunt.log.writeln("Clean registered");
	grunt.config.set('clean', {
		dev: {
			src: ['dev'],
			options:{
				force:true
			}
		},
		build: {
			src:['www'],
			options:{
				force:true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
};
