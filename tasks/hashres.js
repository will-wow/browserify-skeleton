// 'grunt-hashres'
// Adds a hash to your filenames, for cache-busting.
module.exports = function(grunt) {
  return {
    options: {
      encoding: 'utf8',
      fileNameFormat: '${name}.${hash}.${ext}',
      renameFiles: true
    },
    dev: {
      src: [
        'dev/main.js',
        'dev/styles.css'
      ],
      dest: 'dev/index.html'
    },
    prod: {
      src: [
        'dev/main.min.js',
        'dev/styles.min.css'
      ],
      dest: 'dev/index.html'
    }
  };
};
