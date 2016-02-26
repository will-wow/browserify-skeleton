module.exports = function (grunt) {
  grunt.registerTask('production', [
    'version:prod',
    'jshint', // run jshint on app folder
    'compileProdAssets',
    'ngAnnotate',
    'uglify',
    "usebanner:prod",
    'cssmin',
    'linkAssetsBuildProd',
    'clean:build',
    'copy:build',
    'hashres:prod'
  ]);
};
