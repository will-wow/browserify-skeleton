'use strict';

var angular = require('angular');

var mod = angular.module('app.greetings', []);

mod.controller('GreetingController', require('./greetings-controller'));
mod.factory('greetings', require('./greetings-service'));
mod.directive('greeting', require('./greeting-directive'));

module.exports = mod.name;
