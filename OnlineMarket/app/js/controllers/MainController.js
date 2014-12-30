app.controller('MainController', function($scope, $http){

	$http.get('http://localhost:1337/api/Ads?PageSize=100')
		.success(function(data){			
			$scope.ads = data;
			console.log($scope.ads);

			$http.get('http://localhost:1337/api/categories')
				.success(function(data){
					$scope.categories = data;
					console.log($scope.categories);

					$http.get('http://localhost:1337/api/towns')
						.success(function(data){
							$scope.towns = data;
							console.log($scope.towns);
						});
				});
		});

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
			return town.id === townId;
		});

		console.log(town);
	};
	$scope.townFilter = townFilter;
	$scope.categoryId = undefined;
	$scope.townId = undefined;
	$scope.assignFilterVal = assignFilterVal;
});

// GET api/Ads?CategoryId={CategoryId}&TownId={TownId}&StartPage={StartPage}&PageSize={PageSize}