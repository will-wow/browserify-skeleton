// 'grunt-ng-annotate'
module.exports = function(grunt) {
  return {
    options: {
      add: true,
      singleQuotes: true
    },
    app: {
      files: {
        'dev/main.js': ['dev/main.js']
      }
    }
  };
};
