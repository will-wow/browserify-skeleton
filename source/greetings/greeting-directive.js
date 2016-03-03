'use strict';

var greetingDirective = /*@ngInject*/ function (
) {
  return {
    restrict: 'E',
    template: require('./greeting-directive.html'),
    scope: {
      greeting: '='
    }
  };
};

module.exports = greetingDirective;
