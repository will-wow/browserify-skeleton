'use static';

var angular = require("angular");

var routesConfig = /*@ngInject*/ function (
  $urlRouterProvider,
  $stateProvider
) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/spinner");

  $stateProvider
    .state('spinner', {
      url: '/spinner',
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
