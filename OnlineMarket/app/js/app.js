var app = angular.module('app', ['ngResource', 'ngRoute']);
	app.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/publicHome.html',
			controller: 'HomeController'
		})
		.otherwise({redirectTo: '/'});	
	});



