var app = angular.module('app', ['ngResource', 'ngRoute']);
	app.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/ads.html',
			controller: 'MainController'
		})
		.otherwise({redirectTo: '/'});	
	});



