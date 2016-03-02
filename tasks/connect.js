// 'grunt-contrib-connect'
module.exports = function (grunt) {
  return {
    server: {
      options: {
        port: 3000,
        base: 'dev'
      }
    }
  };
};
