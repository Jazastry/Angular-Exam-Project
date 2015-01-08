app.controller('RegisterController', 
	['$scope', 'townsRequester', 'userRequester',
		function($scope, townsRequester, userRequester){
	$scope.currentPageName = 'Register';
	$scope.towns = townsRequester.getAllTowns();
	$scope.register = function (user) {
		userRequester.register(user);
	};
}]);