var app = angular.module('ViseoSystemApp', ['ngRoute']);
	app.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/ads.html',
			controller: 'MainController'
		});	
	});



