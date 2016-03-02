'use strict';

var angular = require('angular');

var mod = angular.module('app.spinner', [
  require('angular-spinner')
]);

mod.controller('SpinnerController', require('./spinner-controller'));

module.exports = mod.name;
