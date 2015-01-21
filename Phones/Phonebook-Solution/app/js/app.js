var app = angular.module('app', ['ngResource', 'ngRoute', 'LocalStorageModule']);

app.constant('baseServiceUrl', 'https://api.parse.com/1/');
app.constant('parseAppId', 'tQmLbgAJxhh5IBfS8SEfyaXqtFiCuiHN4Tohr7ew');
app.constant('parseRestApiKey', '59tPasy1hhIw4WYnrF4t2hed3Msdre3ih5EMMQGe');

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
	$routeProvider.otherwise({  
		redirectTo: '/'
	});	
	localStorageServiceProvider.setStorageType('localStorage');
}]);



