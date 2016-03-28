'use strict';

/**
 * @ngdoc overview
 * @name employeeApp
 * @description
 * # employeeApp
 *
 * Main module of the application.
 */
angular
  .module('employeeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'TreeWidget'
   
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
       // controller: 'MainCtrl',
        //controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      //  controller: 'AboutCtrl',
       // controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
