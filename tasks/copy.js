//'grunt-contrib-copy'

module.exports = function(grunt) {
	return {
		dev: {
			files: [{
				expand: true,
				cwd: './source',
				src: ['**/*.*','!**/*.scss','!**/*.js'], // don't copy js, but copy module's html templates.
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
	};
};
