'use strict';

var _ = require('lodash');

var GREETINGS = ['hello', 'hi', 'hey', 'sup', 'yo', 'howdy'];
var COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

var combineAttributes = function (message, color) {
  return {
    message: message,
    color: color
  };
};

var untestedFunction = function () {
  // This function won't get tested. Sad for it.
  var foo = 'foo';
  var bar = 'bar';
  return foo + bar;
};

var greetingsFactory = /*@ngInject*/ function (
) {
  return function () {
    var shuffledGreetings = _.shuffle(GREETINGS);
    var shuffledColors =  _.shuffle(COLORS);

    return _.zipWith(shuffledGreetings, shuffledColors, combineAttributes);
  };
};

module.exports = greetingsFactory;
