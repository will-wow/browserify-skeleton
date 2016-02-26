/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function(grunt) {
  grunt.log.writeln("Sass registered");

  var files = [{
    expand: true,
    cwd: 'source/public/sass/',
    src: ['styles.scss'],
    dest: 'dev/public/css/',
    ext: ".css"
  }];

  grunt.config.set('sass', {
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
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};
