'use static';

var angular = require("angular");

var routesConfig = /*@ngInject*/ function (
  $stateProvider
) {

  $stateProvider
    .state('spinner', {
      url: '/',
      templateUrl: './spinner/spinner.html',
      controller: 'SpinnerController',
      controllerAs: 'ctrl'
    })
    .state('greetings', {
      url: '/greetings',
      templateUrl: './greetings/greetings.html',
      controller: 'GreetingsController',
      controllerAs: 'ctrl'
    });
};

module.exports = routesConfig;
