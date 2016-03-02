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
      controllerAs: 'spinner'
    })
    .state('greetings', {
      url: '/greetings',
      templateUrl: './greetings/greetings.html',
      controller: 'GreetingsController',
      controllerAs: 'greetings'
    });
};

module.exports = routesConfig;
