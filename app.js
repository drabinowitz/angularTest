angular.module('myApp',[]).
	
	controller('myCtrl',function($scope,$timeout,$q){

		function wait() {

			var defer = $q.defer();

			$timeout(function() {

				defer.resolve();

			}, 2000);

			return defer.promise;

		};

	    $scope.saveSettings = function() {
    
	        $scope.notifySaved = true;
	    
	        wait().then(function() {
	    
	            $scope.notifySaved = false;
	    
	        });
    	
    	};

	})