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
              // index.js files just set up modules, so we can ignore them.
              '**/index.js',
              // Don't check test coverage of tests
              '**/*_test.js',
              '**/test-utils/**',
              // This stuff is all boilerplate.
              '**/main.js',
              '**/routes.js',
              // Since we're requiring html files, make sure to not report on them.
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
