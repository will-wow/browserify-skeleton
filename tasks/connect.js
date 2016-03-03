// 'grunt-contrib-connect'
module.exports = function (grunt) {
  return {
    dev: {
      options: {
        // livereload doesn't seem to be working with 0.0.0.0
        hostname: 'localhost',
        // localhost port to connect to
        port: 3000,
        // Directory to serve
        base: 'dev',
        // Inject the livereload link, which lets watch's livereload work.
        livereload: true,
      }
    },
    prod: {
      options: {
        // localhost port to connect to
        port: 3001,
        // Directory to serve
        base: 'www',
        keepalive: true
      }
    }
  };
};
