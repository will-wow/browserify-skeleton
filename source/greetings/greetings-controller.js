var angular = require("angular");
var _ = require("lodash");

var GreetingsController = /*@ngInject*/ function(
  greetings
) {
  this.greetings = greetings();
};

module.exports = GreetingsController;
