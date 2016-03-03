// 'grunt-sass'
module.exports = function(grunt) {
  var files = [{
    expand: true,
    cwd: 'source/',
    src: ['styles.scss'],
    dest: 'dev/',
    ext: ".css"
  }];

  return {
    dev: {
      files: files,
      options: {
        sourcemap: true,
        outputStyle: "expanded",
      }
    },
    prod: {
      files: files,
      options: {
        outputStyle: "compressed",
      }
    }
  };
};
