'use strict';

var angular = require('angular');

var mod = angular.module('app.greetings', []);

mod.controller('GreetingsController', require('./greetings-controller'));
mod.factory('greetings', require('./greetings-service'));
mod.directive('greeting', require('./greeting-directive'));

module.exports = mod.name;
