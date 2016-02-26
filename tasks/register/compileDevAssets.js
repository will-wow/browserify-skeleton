module.exports = function (grunt) {
  grunt.registerTask('compileDevAssets', [
    //'readPkg',
    'clean:dev',
    'sass:dev',
    'browserify:dev',
    //'imagemin:dist',
    'copy:dev',
    'usebanner:dev'
  ]);
};
