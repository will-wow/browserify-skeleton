var _ = require('lodash');

// 'grunt-html-build'
// Add files to index.html
module.exports = function(grunt) {
  var defaultOptions = {
    src: 'dev/index.html',
    dest: 'dev/',
    options: {
      scripts: {
        main: ''
      }
    }
  };

  var dev = _.cloneDeep(defaultOptions);
  var prod = _.cloneDeep(defaultOptions);

  dev.options.scripts.main = 'dev/main.js';
  prod.options.scripts.main = 'dev/main.min.js';

  return {
    dev: dev,
    prod: prod
  };
};
