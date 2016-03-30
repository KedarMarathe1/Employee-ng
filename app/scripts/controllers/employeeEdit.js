var myApp = angular.module("employeeApp");
myApp.controller('EmployeeEdit', ['$scope','$http','$location',function ($scope,$http,$location) {

$scope.deletedCertifications = [];
$scope.deletedQualifications = [];
//-----------------------------To add qualification-------------------------------------//
 		$scope.addQualification = function(user){
 			var duplicateFlag=false
 				if(document.getElementById("select_qualificaion").selectedIndex >0 && document.getElementById("percentage").value){                 
 					for(i=0;i<$scope.qualifications.length;i++)
 						if($scope.qualifications[i].name==user.qualification_selected.name)
 							duplicateFlag=true;

 					if(!duplicateFlag)
 					$scope.qualifications.push({'name': user.qualification_selected.name, 'percentage':user.percentage,'qualification_code': user.qualification_selected.code,'add':true});
 				}
		}
											
//------------------------- Add Certification------------------------------------//				
		$scope.addCertification = function(user){
				var duplicateFlag=false;
 				if(document.getElementById("select_certification").selectedIndex >0 && document.getElementById("year").value){
 						for(i=0;i<$scope.certifications.length;i++)
 							if($scope.certifications[i].certification_name==user.certification_selected.certification_name)
 								duplicateFlag=true;

 						if(!duplicateFlag)
 						$scope.certifications.push({'certification_name': user.certification_selected.certification_name, 'year':user.year,'certification_code':user.certification_selected.certification_code,'add':true})		
			}
		}

//-------------------------Add Salary-----------------------------/////////

			$scope.addSalary = function(newSalary){
				console.log($scope.salary);
				var duplicateFlag=false;
 				
 				if(document.getElementById("salaryYear").value && document.getElementById("salarySalary").value && document.getElementById("salaryLeaves").value && document.getElementById("salaryBonus").value && document.getElementById("salaryRole").value){
 						for(i=0;i<$scope.salary.length;i++)
 							if($scope.salary[i].year==newSalary.year)
 								duplicateFlag=true;

 						if(!duplicateFlag)
 						$scope.salary.push({'year': newSalary.year, 'salary':newSalary.salary,'leaves':newSalary.leaves,'bonus':newSalary.bonus,'role':newSalary.role,'add':true})		
			}
		}
			
		

//-----------------------Select id for delete Certification-------------------//	
		$scope.getDeleteId_Qualification = function(btn) {
			if(this.data.add==true)
				this.data.sr_no = false

			else 
			$scope.deleteId = this.data.sr_no;
			$scope.buttonClicked = btn;
  		};

//------------------Select id for delete Qualification-------------------//
  		$scope.getDeleteId_Certification = function(btn) {
  			if(this.data.add==true)
				this.data.sr_no = false
			else
	        $scope.deleteId = this.data.sr_no;
	        $scope.buttonClicked = btn;
  		};
//----------------Select id of deleted Salary-----------------------------//
  		$scope.getDeleteId_Salary = function(btn) {
	        $scope.deleteId = $scope.salary[this.$index].sr_no;
	        $scope.buttonClicked = btn;
  		};
//--------------------Delete certification from modal--------------------//
		$scope.deleteCertification = function() {
			for (i = 0; i < $scope.certifications.length; i++) {
					console.log($scope.certifications[i].sr_no)
			     if ($scope.certifications[i].sr_no == $scope.deleteId || $scope.certifications[i].sr_no==false) {
			         if ($scope.certifications[i].add!=true)
			             $scope.deletedCertifications.push($scope.certifications[i].sr_no);
			             $scope.certifications.splice(i, 1);
			            }
			        }

  			  };
//--------------------Delete qualification from modal--------------------//
  			$scope.deleteQualification = function() {
			    for (i = 0; i < $scope.qualifications.length; i++) {
			    
			            if ($scope.qualifications[i].sr_no == $scope.deleteId || $scope.qualifications[i].sr_no==false) {
			                if ($scope.qualifications[i].add!=true)
			                	$scope.deletedQualifications.push($scope.qualifications[i].sr_no);
			                $scope.qualifications.splice(i, 1);
			            }
			        }
			};
//-----------------Delete Salary------------------------------------//
			$scope.deleteSalary = function(){
				for(i=0;i<$scope.salary.length;i++)
				{
					if($scope.salary[i].sr_no == $scope.deleteId){
			                $scope.salary.splice(i, 1);
					}
				}
			}
//---------------To update the changes------------------------------//
			$scope.saveData = function(emp)
			{

				for(i=0;i<$scope.deletedCertifications.length;i++)
				{
					console.log("data: "+$scope.deletedCertifications[i])
					$http.delete("http://localhost:1337/employee/deleteCertification?id="+$scope.deletedCertifications[i]).success(function(result){

						console.log(result);
					})
				}

				for(i=0;i<$scope.deletedQualifications.length;i++)
				{
					$http.delete("http://localhost:1337/employee/deleteQualification?id="+$scope.deletedQualifications[i]).success(function(result){
						console.log(result);
					})
				}	

				for(i=0;i<$scope.qualifications.length;i++)
				{
					if($scope.qualifications[i].add==true)
					{
						var data = ({
							emp_id:emp.emp_id,
							qualification_code:$scope.qualifications[i].qualification_code,
					    	percentage:$scope.qualifications[i].percentage
						})
						$http.post("http://localhost:1337/employee/insertQualification",data).success(function(result){
							console.log(result)
						})
					}
				}

				for(i=0;i<$scope.certifications.length;i++)
				{
					if($scope.certifications[i].add==true)
					{
						var data =({
							emp_id:emp.emp_id,
							year:$scope.certifications[i].year,
							certification_code:$scope.certifications[i].certification_code
						})
						$http.post("http://localhost:1337/employee/insertCertification",data)
					}
				}

				$location.path("/emp");
			}

}]);