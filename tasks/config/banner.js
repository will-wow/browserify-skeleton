// TODO: get prettier template working. banner doesn't render for some reason.
module.exports = function(grunt) {
  grunt.log.writeln("Banner registered");
  grunt.config.set('usebanner', {
    pkg: '<json:package.json>',
    banner: '/*\n' +
    'Theme Name: <%= pkg.name %>\n' +
    'Theme URI: <%= pkg.url %>\n' +
    'Description: <%= pkg.description %>\n' +
    'Version: <%= pkg.version %>\n' +
    '*/',
    dev:{
      options:{
        position:'top',
        //banner:'<%= banner %>',
        banner:"//***********************\n// <%= pkg.name %>  version: <%= pkg.version %>\n//***********************\n var PICKLES_VERSION='<%= pkg.version %>';",
        linebreak:true
      },
      files:{
        src: [
          'dev/public/js/*.js'
        ]
      }
    },
    prod:{
      options:{
        position:'top',
        //banner:'<%= banner %>',
        banner:"//***********************\n// <%= pkg.name %>  version: <%= pkg.version %>\n//***********************\n var PICKLES_VERSION='<%= pkg.version %>';",
        linebreak:true
      },
      files:{
        src: [
          'dev/public/js/*.min.js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-banner');
};
