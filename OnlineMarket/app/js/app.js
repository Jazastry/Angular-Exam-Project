var app = angular.module('app', ['ngResource', 'ngRoute', 'LocalStorageModule']);
app.constant('baseServiceUrl', 'http://localhost:1337/api/');
app.config(['$routeProvider', 'localStorageServiceProvider', 
				function($routeProvider, localStorageServiceProvider) {
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
	localStorageServiceProvider.setStorageType('localStorage');
}]);



