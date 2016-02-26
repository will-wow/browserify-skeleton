module.exports = function (grunt) {
	grunt.registerTask('testBuild', [
		'compileProdAssets',
		'ngAnnotate',
		'uglify',
		'cssmin',
		'linkAssetsBuildProd',
		'clean:build',
		// 'copy:build',
		'hashres:test'
	]);
};
