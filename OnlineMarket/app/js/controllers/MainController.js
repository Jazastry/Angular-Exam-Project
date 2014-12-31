app.controller('MainController', function($scope){	

	var assignFilterVal = function(categoryId, townId){
		if (categoryId !== undefined) {
			$scope.categoryId = parseInt(categoryId);
			console.log('cat: ' + $scope.categoryId + ', tow: ' + $scope.townId);
		} else {
			$scope.categoryId = undefined;
		}
		if (townId !== undefined) {
			$scope.townId = parseInt(townId);
			console.log('cat: ' + $scope.categoryId + ', tow: ' + $scope.townId);
		} else {
			$scope.townId = undefined;
		}	
	};

	var townFilter = function(townId) {
		var town = _.filter($scope.towns, function(town){
			return parseInt(town.id) === parseInt(townId);
		});
		console.log(town);
		return town;
	};
	
	$scope.ads = Ads.getAllAds();
	// $scope.towns = data;
	// $scope.categories = data;
	$scope.townFilter = townFilter;
	$scope.categoryId = undefined;
	$scope.townId = undefined;
	$scope.assignFilterVal = assignFilterVal;
});

// GET api/Ads?CategoryId={CategoryId}&TownId={TownId}&StartPage={StartPage}&PageSize={PageSize}