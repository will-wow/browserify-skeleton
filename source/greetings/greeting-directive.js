'use strict';

var greetingDirective = /*@ngInject*/ function (
) {
  return {
    restrict: 'E',
    // Requiring a template, the future is now.
    template: require('./greeting-directive.html'),
    scope: {
      greeting: '='
    }
  };
};

module.exports = greetingDirective;
