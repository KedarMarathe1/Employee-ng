var myApp = angular.module("employeeApp");
myApp.controller('TreeController', ['$scope','$http','$location',function ($scope,$http,$location) {

$scope.baseUrl='http://localhost:1337'
    function init() {


        $http.get("http://localhost:1337/employee/treedata").success(function(result)
        {
             $scope.treeNodes = result;
             console.log(result);
        })


        //--------------------- To get list of qualifications--------------------------------------//
        $http.get($scope.baseUrl+'/employee/getQualification/').success(function (result) {     
                    $scope.qualification_list=result;
                })
                
        //----------------------To get list of certifications---------------------------------------//
        $http.get($scope.baseUrl+'/employee/getCertification/').success(function (result) {         
                    $scope.certification_list=result;
                })
    }
    init();
    $scope.$on('selection-changed', function (e, node) {
                //node - selected node in tree
        $scope.selectedNode = node;

        if($scope.selectedNode.level=="emp")
        {
            $location.path('/emp');
            $http.get("http://localhost:1337/employee/employeedata/" + $scope.selectedNode.id).success(function (result) {
            $scope.employee = result[0]
            $scope.employeeId = $scope.selectedNode.id;
            $scope.emp = $scope.employee.personal[0];
            $scope.qualifications=$scope.employee.qualification;
            console.log($scope.qualifications);
            $scope.salary=$scope.employee.company;
            console.log($scope.salary);

            $scope.certifications=$scope.employee.certification;
            })
        }
        else if($scope.selectedNode.level=="dpt")
        {
            $location.path('/dpt');
            $http.get("http://localhost:1337/employee/departmentdata/"+ $scope.selectedNode.id).success(function (result) {
                $scope.department = result
            })
            .error(function (result) {
                conole.log(result);
            })
        }
        else if ($scope.selectedNode.level == "root") {
            $location.path('/root');
        }    
     });



    $scope.$on('expanded-state-changed', function (e, node) {
        // node - the node on which the expanded state changed
        // to see the current state check the expanded property
        $scope.exapndedNode = node;
        //console.log(node.expanded);
    });

    $scope.editDisplay = function() {

        $location.path("/edit");
    }

  $scope.addEmployee = function() {

        $location.path("/addEmployee");
    }


}]);
