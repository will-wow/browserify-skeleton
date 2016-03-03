// 'grunt-contrib-sass'
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
        sourcemap: 'inline',
        style: "expanded",
        // add fontawesome, and stuff from bower, to the sass loadpath
        loadPath: ["node_modules/font-awesome/scss/font-awesome.scss/", "bower_components/"]
      }
    },
    prod: {
      files: files,
      options: {
        sourcemap: 'none',
        style: "compressed",
        // add bootstrap to the sass loadpath
        loadPath: ["node_modules/font-awesome/scss/font-awesome.scss/", "bower_components/"]
      }
    }
  };
};
