angular.module('myApp', [])
	.constant('VERSION',1.1)
	.run(function($rootScope,VERSION){
		$rootScope.version = VERSION;
	})
	.controller('myCtrl',['$scope',function($scope){
		$scope.version = 9.9;
	}]);