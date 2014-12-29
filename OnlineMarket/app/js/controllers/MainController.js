app.controller('MainController', function($scope, $http){
	$scope.currentPage = "Home";
	$http.get('http://localhost:1337/api/Ads?PageSize=100')
		.success(function(data){			
			$scope.ads = data;
			console.log($scope.ads);
		});
});

// GET api/Ads?CategoryId={CategoryId}&TownId={TownId}&StartPage={StartPage}&PageSize={PageSize}