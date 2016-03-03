//'grunt-contrib-copy'

module.exports = function(grunt) {
	return {
		prod: {
			files: [{
				expand: true,
				cwd: 'dev',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	};
};
