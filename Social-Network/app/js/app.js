var app = angular.module('app', ['ngResource', 'ngRoute', 'LocalStorageModule', 'cgNotify', 'ui.bootstrap', ]);

app.constant('baseServiceUrl', 'https://api.parse.com/1/');
app.constant('parseAppId', 'uRCNIGdy4Y64vQ0W7CBnRfwRxYvrnoO37Z3s65Nr');
app.constant('parseRestApiKey', 'P2TG5qWKWFHh4nK9Q8hYiHmQqby2zLqi1CLy6NPb');

app.config(['$routeProvider', 'localStorageServiceProvider', 
				function($routeProvider, localStorageServiceProvider) {	

	$routeProvider.when('/', {
		templateUrl: 'templates/public/publicHome.html',
		controller: 'HomePublicController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'templates/public/login.html',
		controller: 'LoginController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/public/register.html',
		controller: 'RegisterController'
	});
	$routeProvider.when('/user/home', {
		templateUrl: 'templates/user/userHome.html',
		controller: 'UserHomeController'
	});
	$routeProvider.otherwise({  
		redirectTo: '/'
	});	

	localStorageServiceProvider.setStorageType('localStorage');	
}]);








