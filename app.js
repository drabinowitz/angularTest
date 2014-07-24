angular.module('CORSDemo', [])
	
	.config(function($httpProvider){
		
		$httpProvider.defaults.useXDomain = true;
	
	})

	.controller('ytCtrl', function($scope, $http, $sce){

		var embedUrl = "http://www.youtube.com/embed/";

		$scope.trustSrc = function(resultId){

			return $sce.trustAsResourceUrl(embedUrl + resultId); 

		}

	});