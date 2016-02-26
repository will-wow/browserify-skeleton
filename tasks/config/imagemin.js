/**
 * Compress Image Files
 */
//var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
  grunt.log.writeln("imagemin registered");
  grunt.config.set('imagemin', {
    dist: {
      options:{
        optimizationLevel:3
      },
      files:[
        {
          expand:true,
          cwd:'source/public/assets',
          src:['**/*.{png,jpg,gif}'],
          dest:'dev/public/assets'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
};