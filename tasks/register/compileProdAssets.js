module.exports = function (grunt) {
  grunt.registerTask('compileProdAssets', [
    'readPkg',
    'clean:dev',
    'clean:build',
    'sass:prod',
    //'buildnumber',
    'browserify:prod',
    'imagemin:dist',
    'copy:dev',
    'usebanner:prod'
  ]);
};
