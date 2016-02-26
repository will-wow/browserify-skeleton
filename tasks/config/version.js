module.exports = function(grunt) {
  grunt.log.writeln("Version registered");
  grunt.config.set('version', {
    dev:{
      options:{
        release:"prerelease"
      },
      src: ['package.json']
    },
    release:{
      options:{
        release:"minor"
      },
      src: ['package.json']
    },
    prod:{
      options:{
        release:"patch"
      },
      src: ['package.json']
    }

  });
  grunt.loadNpmTasks('grunt-version');
};
