angular.module('filters', [])

	.controller('myController',['$scope', function($scope) {
	
		$scope.messages = [
	        
	        {

	        	content: "What would Kitty-Meow-Meow do? #wwkmmd",

				author: 'Peter Cellar',

				views: 198,

				published: '2009-02-03'

			},

			{

				content: "How's it going? Did you see that sunset?",
				
				author: 'John Doe',
				
				views: 190000,
				
				published: 1288323623006

			},
				
			{

				content: "I wonder if Justin Bieber has many Twitter followers",
				
				author: 'Jane Doe',
				
				views: 1431,
				
				published: '2014-04-01'

			}
		
		]

	}])

	.filter('titlecase',function(){

		return function(input){

			if (input){

				return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

			}

		}

	});