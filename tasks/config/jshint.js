
module.exports = function(grunt) {
    grunt.log.writeln("JSHint registered");
    grunt.config.set('jshint', {
        options:{
            curly: false,
            eqeqeq: true,
            eqnull: true,
            browser: true,
            node:true,
            forin:true,
            latedef:"nofunc",
            nonbsp:true,
            //strict:"implied",
            browserify:true,
            //undef:true,
            //unused:true,
            devel:true,
            globals: {
                jQuery: true,
                angular:true
            },
            reporter:require('jshint-stylish')
        },
        source: [
          'source/public/js/**/*.js',
          '!source/public/js/**/*-spec.js',
          '!source/public/js/lib/**/*.js'
        ],
        spec: {
          files: {
            src: ['source/public/js/**/*-spec.js']
          },
          options: {
            jasmine: true
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
