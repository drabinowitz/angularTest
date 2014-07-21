angular.module('myApp', [])
	.constant('VERSION',1.1)
	.run(function(VERSION,$rootScope){
		$rootScope.version = VERSION;
	});