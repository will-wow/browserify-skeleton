// 'grunt-sync'
module.exports = function(grunt) {
  return {
    source: {
      files: [{
        cwd: './source',
        src: ['**/*', '!**/*.scss', '!**/*.js'],
        dest: 'dev'
      }]
    },
    libs: {
      files: [
        // font-awesome fonts
        {
          cwd: 'node_modules/font-awesome/fonts',
          src: ['**/*.*'],
          dest: 'dev/fonts'
        }
      ]
    }
  };
};
