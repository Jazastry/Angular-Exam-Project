var app = angular.module('app', ['ngResource', 'ngRoute']);
app.constant('baseServiceUrl', 'http://localhost:1337/api/');
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/publicHome.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});	
});



