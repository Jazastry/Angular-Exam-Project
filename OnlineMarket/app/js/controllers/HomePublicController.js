app.controller('HomePublicController', 
	['$scope', 'authentication', function($scope, authentication){	

	$scope.isLoggedIn = authentication.isLogedIn();
	$scope.pageArray;
	$scope.currentPageName = 'Home';
	$scope.categoryId = undefined;
	$scope.townId = undefined;
}]);