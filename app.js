angular.module('formApp',[])

	.controller('formCtrl',function($scope){

		$scope.submitted = false;

		$scope.submit = function(){

			$scope.submitted = true;

			if($scope.myForm.$valid){

				console.log('Form Submitted: ',$scope.data);

			} else {

				console.log('form not valid');

			}

		};

		$scope.minMaxVal = 10;

	});