// 'grunt-sync'
module.exports = function(grunt) {
  return {
    dev: {
      files: [{
        cwd: './source',
        src: ['**/*', '!/js/**/*.js'],
        dest: 'dev'
      }]
    }
  };
};
