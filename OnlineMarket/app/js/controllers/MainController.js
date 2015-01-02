app.controller('MainController', function($scope, $http, adsRequester){	

	var assignFilterVal = function(categoryId, townId){
		if (categoryId !== undefined) {
			$scope.categoryId = parseInt(categoryId);
			//console.log('cat: ' + $scope.categoryId + ', tow: ' + $scope.townId);
		} else {
			$scope.categoryId = undefined;
		}
		if (townId !== undefined) {
			$scope.townId = parseInt(townId);
			//console.log('cat: ' + $scope.categoryId + ', tow: ' + $scope.townId);
		} else {
			$scope.townId = undefined;
		}	
	};

	var townFilter = function(townId) {
		var town = _.filter($scope.towns, function(town){
			return parseInt(town.id) === parseInt(townId);
		});

		return town;
	};

	$scope.ads = adsRequester.getAll('ads', 10, 8);	
	// $scope.numPages = result.numPages;
	$scope.towns = adsRequester.getAll('towns');
	console.log($scope.towns);
	$scope.categories = adsRequester.getAll('categories');
	$scope.townFilter = townFilter;
	$scope.categoryId = undefined;
	$scope.townId = undefined;
	$scope.assignFilterVal = assignFilterVal;
});

// GET api/Ads?CategoryId={CategoryId}&TownId={TownId}&StartPage={StartPage}&PageSize={PageSize}