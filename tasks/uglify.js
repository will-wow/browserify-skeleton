// 'grunt-contrib-uglify'
module.exports = function(grunt) {
  return {
    dist: {
      src: ['dev/main.js'],
      dest: 'dev/main.min.js' // the file is copied later so put it in dev
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
  };
};
