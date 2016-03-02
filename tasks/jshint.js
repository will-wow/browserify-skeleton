// 'grunt-contrib-jshint'

module.exports = function(grunt) {
  return {
    options: {
      curly: false,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      node: true,
      forin: true,
      latedef: "nofunc",
      nonbsp: true,
      //strict:"implied",
      browserify: true,
      //undef:true,
      //unused:true,
      devel: true,
      globals: {
        jQuery: true,
        angular: true
      },
      reporter: require('jshint-stylish')
    },
    source: [
      'source/**/*.js',
      '!source/**/*_test.js',
    ],
    spec: {
      files: {
        src: ['source/**/*_test.js']
      },
      options: {
        jasmine: true
      }
    }
  };
};
