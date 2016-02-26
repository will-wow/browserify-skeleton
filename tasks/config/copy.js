/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, except coffescript and less files, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories and files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {
	grunt.log.writeln("Copy registered");
	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './source',
				src: ['**/*.*','!**/public/sass/**/*.*','!**/public/js/**/*.js','!**/public/assets/**/*.{png,gif,jpg}'], // don't copy js, but copy module's html templates.
				dest: 'dev'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: 'dev',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
