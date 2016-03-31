var app = angular.module("employeeLogin",['ngRoute']);
    app.controller("LoginCtrl",function($scope,$window){
        $scope.Login = function()
          {
            //$location.path("views/dashboard.html")
              $window.location.href = 'views/dashboard.html'
          }
        })

