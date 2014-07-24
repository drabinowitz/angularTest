angular.module('CORSDemo', []).
	
	config(function($httpProvider){
		
		$httpProvider.defaults.useXDomain = true;
	
	}).

	controller('ytCtrl', function($scope, $http, $sce){

		var embedUrl = "http://www.youtube.com/embed/";

		$scope.trustSrc = function(resultId){

			return $sce.trustAsResourceUrl(embedUrl + resultId); 

		}

		$scope.searchYouTube = function(keyword){

			$scope.keyword = keyword;

			var url = "https://www.googleapis.com/youtube/v3/search";

			var request = {

				key: "AIzaSyBq9uvAd3KJMszF-1EAVvikMJd9NmcTAYs",
				part: "snippet",
				maxResults: 10,
				order: "viewCount",
				q: keyword,
				type: "video",
				videoEmbeddable: true

			};

			$http({

				method: 'GET',

				url:url,

				params: request

			}).

			success(function(data){

				$scope.results = data.items;

			}).

			error(function(){

				alert('error');

			});

		};

	});