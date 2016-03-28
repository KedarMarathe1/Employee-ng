var myApp = angular.module("employeeApp");
myApp.controller('EmployeeEdit', ['$scope','$http','$location',function ($scope,$http,$location) {




//-----------------------------To add qualification-------------------------------------//
 		$scope.addQualification = function(user){

 			var duplicateFlag=false

 				if(document.getElementById("select_qualificaion").selectedIndex >0 && document.getElementById("percentage").value){
                    
 					for(i=0;i<$scope.qualifications.length;i++)
 					{

 						if($scope.qualifications[i].name==user.qualification_selected.name)
 							duplicateFlag=true;
 					}

 					if(!duplicateFlag)
 					$scope.qualifications.push({'name': user.qualification_selected.name, 'percentage':user.percentage,'qualification_code': user.qualification_selected.code,'add':true});
 				}
		}
											
//				
		$scope.addCertification = function(user){
				var duplicateFlag=false;
 				if(document.getElementById("select_certification").selectedIndex >0 && document.getElementById("year").value){
 						for(i=0;i<$scope.certifications.length;i++)
 						{
 							if($scope.certifications[i].certification_name==user.certification_selected.certification_name)
 								duplicateFlag=true;
 						}

 						if(!duplicateFlag)
 						$scope.certifications.push({'certification_name': user.certification_selected.certification_name, 'year':user.year,'certification_code':user.certification_selected.certification_code,'add':true})		
			}
		}








    
    }]);