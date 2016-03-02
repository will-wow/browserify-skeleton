'use strict';

var angular = require('angular');
//var config = require('./config');

var app = angular.module('app', [
  // This one's from npm
  require('angular-ui-router'),
  // This one's from npm, but doesn't export its name.
  require('angular-spinner'),
  // This one's from bower, but doesn't support CommonJS
  require('angular-loading-bar'),

  require('./greetings'),
  require('./spinner')
]);

var sp = require('angular-spinner');
console.log('SP', sp);

app.config(require('./routes'));
