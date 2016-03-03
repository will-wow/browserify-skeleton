'use strict';

var _ = require('lodash');

// Add one to a count, keeping it between 0 and 2.
// Note that we can safely put this outside of the angular closure.
var tickDotsUp = function (count) {
  return (count + 1) % 3;
};

var SpinnerController = /*@ngInject*/ function (
  $interval
) {
  var self = this;
  var dotCount = 0;

  self.dots = _.range(dotCount + 1);

  $interval(function () {
    dotCount = tickDotsUp(dotCount);
    // Update the dots array, which will ng-repeat will use to display dots.
    self.dots = _.range(dotCount + 1);
  }, 500);
};

module.exports = SpinnerController;
