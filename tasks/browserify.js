var _ = require('lodash');

// 'grunt-browserify'
module.exports = function(grunt) {
  var requires, addRequires;

  var defaults = {
    options: {
      browserifyOptions:{
        basedir:"./"
      }
    },
    files: [
      {
        expand:true,
        cwd:'source/',
        src:['main.js'],
        dest:'dev/'
      }
    ]
  };

  var devOptions = _.cloneDeep(defaults);
  var prodOptions = _.cloneDeep(defaults);

  // Uses watchify to do cashed rebuilds of the js in development.
  devOptions.options.watch = true;
  //devOptions.options.keepAlive = true;
  devOptions.options.browserifyOptions.debug = true;

  return {
    dev: devOptions,
    prod: prodOptions
  };
};
