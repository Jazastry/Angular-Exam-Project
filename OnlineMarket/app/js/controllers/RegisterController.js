app.controller('RegisterController', 
	['$scope', 'townsRequester', function($scope, townsRequester){
	$scope.currentPageName = 'Register';
	$scope.towns = townsRequester.getAllTowns();
}]);