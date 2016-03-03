// 'grunt-sync'
module.exports = function(grunt) {
  return {
    source: {
      files: [
        // Source files (no sass or js, they're built seperatly)
        {
          cwd: './source',
          src: ['**/*', '!**/*.scss', '!**/*.js'],
          dest: 'dev'
        },
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
