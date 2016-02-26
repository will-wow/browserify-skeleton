module.exports = function (grunt) {
  grunt.registerTask('default', [
    //'version:dev',
    'jshint', // run jshint on app folder
    'compileDevAssets', // delete all files from dev and www, compile sass, compile js, then copy everything to dev
    'linkAssets', // add all of the files from pipeline to html and template files.
    'watch' // watch for changes
  ]);
};
