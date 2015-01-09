app.controller('AdsFiltersController', ['$scope', 'townsRequester', 'categoriesRequester', function($scope, townsRequester, categoriesRequester){
	
	$scope.towns = townsRequester.getAllTowns();
	$scope.categories = categoriesRequester.getAllCategories();
	$scope.currentTown;
	$scope.currentCategory;			
}]);