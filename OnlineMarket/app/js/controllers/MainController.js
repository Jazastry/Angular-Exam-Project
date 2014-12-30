app.controller('MainController', function($scope, $http){

	$http.get('http://localhost:1337/api/Ads?PageSize=100')
		.success(function(data){			
			$scope.ads = data;
			console.log($scope.ads);
		});

	$http.get('http://localhost:1337/api/categories')
		.success(function(data){
			$scope.categories = data;
			console.log($scope.categories);
		});

	$http.get('http://localhost:1337/api/towns')
		.success(function(data){
			$scope.towns = data;
			console.log($scope.towns);
		});

	var filter = function(category, town){
		if (category !== undefined) {
			$scope.category = parseInt(category);
		} else {
			$scope.category = undefined;
		}
		if (town !== undefined) {
			$scope.town = parseInt(town);
		} else {
			$scope.town = undefined;
		}	
	};
	$scope.category = undefined;
	$scope.town = undefined;
	$scope.filter = filter;
});

// GET api/Ads?CategoryId={CategoryId}&TownId={TownId}&StartPage={StartPage}&PageSize={PageSize}