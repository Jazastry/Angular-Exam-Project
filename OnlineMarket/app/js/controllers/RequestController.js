app.controller('RequestController', function($scope, $http){

	var mainUrl = 'http://localhost:1337/api/';

	var requester = function(method, url, params, headers, data) {
		
		var result = {};

		var request = {
			method: method,
			url: url,
			params: params,
			data: data, 
			headers: headers			
		};

		$http(request)
			.success(function(data){
				result = data;
			})
			.error(function(data){
				alert(data);
			});

		return result;
	};

	// $scope.ads = requester();
	// $scope.towns = data;
	// $scope.categories = data;
	// $http.get('http://localhost:1337/api/Ads?PageSize=100')
	// 	.success(function(data){			
	// 		$scope.ads = data;
	// 		console.log($scope.ads);
	// 	});
	// $http.get('http://localhost:1337/api/towns')
	// .success(function(data){
	// 	$scope.towns = data;
	// 	console.log($scope.towns);
	// });
	// $http.get('http://localhost:1337/api/categories')
	// 	.success(function(data){
	// 		$scope.categories = data;
	// 		console.log($scope.categories);
	// 	});

	var persister = (function(){

		function Ads(){
			this._adsUrl = mainUrl + 'Ads';
		}

		Ads.prototype.getAllAds = function(params) {
			var _this = this; // method, url, params, headers, data
			return requester('GET', _this._adsUrl, params, null, null);
		};

		return {
			Ads: Ads
		};
	});
	
	$scope.persister = persister;
});