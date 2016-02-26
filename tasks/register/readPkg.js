module.exports = function (grunt) {
  grunt.registerTask('readPkg', function() {

    grunt.config.set('pkg', grunt.file.readJSON('./package.json'));
    console.dir(grunt.config.pkg);

  });
};
