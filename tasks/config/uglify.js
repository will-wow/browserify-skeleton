/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {
  grunt.log.writeln("Uglify registered");
  grunt.config.set('uglify', {
    dist: {
      src: ['dev/public/js/main.js'],
      dest: 'dev/public/js/main.min.js' // the file is copied later so put it in dev
    },
    options:{
      mangle:{
        reserved:["require","exports","$"]
      },
      compress: {
        drop_console:true,
        dead_code:true,
        conditionals:true,
        comparisons:true,
        loops:true,
        unused:true,
        hoist_funs:true,
        hoist_vars:true,
        join_vars:true
        //warnings:true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
