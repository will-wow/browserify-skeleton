module.exports = function(grunt) {
  grunt.log.writeln("hashres registered");
  grunt.config.set('hashres', {
    options: {
      encoding: 'utf8',
      fileNameFormat: '${name}.${hash}.${ext}',
      renameFiles: true
    },
    dev: {
      src: [
        'dev/public/js/main.js',
        'dev/public/css/styles.css'
      ],
      dest: 'dev/public/index.html'
    },
    test: {
      src: [
        'dev/public/js/main.min.js',
        'dev/public/css/styles.min.css'
      ],
      dest: 'dev/public/index.html'
    },

    prod: {
      src: [
        'www/public/js/main.min.js',
        'www/public/css/styles.min.css'
      ],
      dest: 'www/public/index.html'
    }
  });

  grunt.loadNpmTasks('grunt-hashres');
};
