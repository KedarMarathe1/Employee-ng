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
    'ui.bootstrap.contextMenu',
    'CustomFilters'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'default.html',
       // controller: 'MainCtrl',
        //controllerAs: 'main'
      })
    
      .when('/about', {
        templateUrl: 'about.html',
      //  controller: 'AboutCtrl',
       // controllerAs: 'about'
      })
      .when('/emp', {
        templateUrl: 'EmployeeDisplay.html'
      })

     .when('/dpt', {
         templateUrl: 'DepartmentDisplay.html'
      })

     .when('/root', {
         templateUrl: 'CompanyDisplay.html'
      })
     .when('/edit', {
         templateUrl: 'EditDisplay.html'
      })
    .when('/addEmployee', {
         templateUrl: 'addEmployee.html',
         controller:'EmployeeAdd'
      })
     
      .otherwise({
        redirectTo: '/'
      });


  });
