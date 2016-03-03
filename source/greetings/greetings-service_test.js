'use strict';

var angular = require('angular');
var testUtils = require('.')

describe('greetings service', function () {
  var greetings;

  beforeEach(angular.mock.module(
    require('./index')
  ));

  beforeEach(angular.mock.inject(function (
    _greetings_
  ) {
    greetings = _greetings_;
  }));

  it('should output a six greetings', function () {
    var someGreetings = greetings();

    expect(someGreetings.length).toBe(6);
  });

  it('should have a greeting and a color', function () {
    var someGreetings = greetings();
    var greetings = someGreetings[0];
    expect(greetings.message).toBeDefined();
    expect(greetings.color).toBeDefined();
  });
});
