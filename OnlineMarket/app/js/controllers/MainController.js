app.controller('MainController', function($scope, $http){
	$scope.currentPage = "Home";
	$scope.cat = undefined;
	$http.get('http://localhost:1337/api/Ads?PageSize=100')
		.success(function(data){			
			$scope.ads = data;
			console.log($scope.ads);
		});
	var filter = function(category){
		if (category !== undefined) {
			$scope.cat = parseInt(category);
		} else {
			$scope.cat = undefined;
		}		
	};
	$scope.filter = filter;
});

// GET api/Ads?CategoryId={CategoryId}&TownId={TownId}&StartPage={StartPage}&PageSize={PageSize}