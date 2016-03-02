// 'grunt-contrib-sass'
module.exports = function(grunt) {
  var files = [{
    expand: true,
    cwd: 'source/public/sass/',
    src: ['styles.scss'],
    dest: 'dev/public/css/',
    ext: ".css"
  }];

  return {
    dev: {
      files: files,
      options: {
        sourcemap: 'inline',
        style: "expanded",
        // add bootstrap to the sass loadpath
        loadPath: ["node_modules/bootstrap-sass/assets/stylesheets/", "bower_components/"]
      }
    },
    prod: {
      files: files,
      options: {
        sourcemap: 'none',
        style: "compressed",
        // add bootstrap to the sass loadpath
        loadPath: ["node_modules/bootstrap-sass/assets/stylesheets/", "bower_components/"]
      }
    }
  };
};
