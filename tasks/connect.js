// 'grunt-contrib-connect'
module.exports = function (grunt) {
  return {
    server: {
      options: {
        hostname: '0.0.0.0',
        protocol: 'http',
        // localhost port to connect to
        port: 3000,
        // Directory to serve
        base: 'dev',
        // Inject the livereload link, which lets watch's livereload work.
        livereload: true,
      }
    }
  };
};
