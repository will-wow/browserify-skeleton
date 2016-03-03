// 'grunt-contrib-watch'
module.exports = function(grunt) {
  return {
    options: {
      livereload: true
    },
    scss: {
      files: ['source/**/*.scss'],
      tasks: ['sass:dev']
    },
    assets: {
      // Assets to watch:
      files: ['source/**/*.json', 'source/**/*.!(js)'],

      // When source are changed:
      tasks: ['sync:dev']
    },
    browserify: {
      // Just a task so livereload works.
      files: ['dev/main.js']
    }
  };
};
