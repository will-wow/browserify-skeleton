var _ = require('lodash');

module.exports = function(grunt) {
    var requires, addRequires;

    var defaults = {
      options: {
          //banner:'//**************************\n// Asset Avenue App version: <%= pkg.version %>\n// Created: <%= grunt.template.today("mm/dd/yyyy") %>//**************************',
          browserifyOptions:{
              basedir:"./"
          }
      },
      files: [
          {
              expand:true,
              cwd:'source/public/js',
              src:['main.js'],
              dest:'dev/public/js/'
          }
      ]
    };

    var devOptions = _.cloneDeep(defaults);
    var prodOptions = _.cloneDeep(defaults);

    // Uses watchify to do cashed rebuilds of the js in development.
    devOptions.options.watch = true;
    //devOptions.options.keepAlive = true;
    devOptions.options.browserifyOptions.debug = true;

    grunt.log.writeln("Browserify registered");
    grunt.config.set('browserify', {
        dev: devOptions,
        prod: prodOptions
    });

    grunt.loadNpmTasks('grunt-browserify');
};
