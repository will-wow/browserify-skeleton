'use strict';

var angular = require('angular');
var testUtils = require('../../test-utils');

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

  describe('greetings', function () {
    it('should output a six greetings', function () {
      var someGreetings = greetings();

      expect(someGreetings.length).toBe(6);
    });

    it('should have a greeting and a color', function () {
      var someGreetings = greetings();
      var greeting = someGreetings[0];
      expect(greeting.message).toBeDefined();
      expect(greeting.color).toBeDefined();
    });
  });

  // Just testing that the test-utils work.
  describe('utils', function () {
    it('should exist', function () {
      expect(testUtils.sample()).toBe('this is a test.');
    });
  });
});
