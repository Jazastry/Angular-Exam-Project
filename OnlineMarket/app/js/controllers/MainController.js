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

	var updateAdsFilter = function(category, town){		
		var ads2 = adsRequester.getAll('ads', town, category);
		$scope.ads = ads2;
		console.log($scope.ads);
	};

	var ads = adsRequester.getAll('ads');

	console.log(ads);

	var currentTownId = undefined;
	var currentCategoryId = undefined;

	$scope.updateAdsFilter = updateAdsFilter;
	$scope.currentTown = currentTownId;
	$scope.currentCategory = currentCategoryId;
	$scope.ads = ads;	
	$scope.towns = adsRequester.getArray('towns');
	$scope.categories = adsRequester.getArray('categories');
	$scope.townFilter = townFilter;
	$scope.categoryId = undefined;
	$scope.townId = undefined;
	$scope.assignFilterVal = assignFilterVal;
});

// GET api/Ads?CategoryId={CategoryId}&TownId={TownId}&StartPage={StartPage}&PageSize={PageSize}