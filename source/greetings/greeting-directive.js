'use strict';

var greetingDirective = /*@ngInject*/ function (
  greetings
) {
  return {
    restrict: 'E',
    template: require('./greeting-directive.html'),
    scope: {
    },
    link: function () {

    }
  };
};

module.exports = greetingDirective;
