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
    'TreeWidget',
    'ui.bootstrap.contextMenu'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/default.html',
       // controller: 'MainCtrl',
        //controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      //  controller: 'AboutCtrl',
       // controllerAs: 'about'
      })
      .when('/emp', {
        templateUrl: 'views/EmployeeDisplay.html'
      })

     .when('/dpt', {
         templateUrl: 'views/DepartmentDisplay.html'
      })

     .when('/root', {
         templateUrl: 'views/CompanyDisplay.html'
      })
     .when('/edit', {
         templateUrl: 'views/EditDisplay.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
