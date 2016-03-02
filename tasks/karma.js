var istanbul = require('browserify-istanbul');

// 'grunt-karma'
module.exports = function(grunt) {
  return {
    options: {
      configFile: 'karma.conf.js'
    },
    serve: {
      autoWatch: true
    },
    coverage: {
      singleRun: true,

      browserify: {
        debug: true,

        transform: [
          [{
            ignore: [
              '**/*_test.js',
              '**/config.js',
              '**/main.js',
              '**/routes.js',
              '**/test-utils/**',
              '**/*.html'
            ],

          }, 'browserify-istanbul']
        ]
      },

      reporters: ['progress', 'coverage'],

      coverageReporter: {
        reporters: [{
          type: 'html'
        }, {
          type: 'text-summary'
        }]
      }
    }
  };
};
