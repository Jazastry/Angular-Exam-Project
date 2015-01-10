app.controller('AdsPublicController', ['$scope', '$rootScope', 'adsRequester', 'filter', function($scope, $rootScope, adsRequester, filter){
	$scope.ready = false;
	function updateAds() {
		console.log($scope.pageFilter);
		adsRequester.getPublicAds($scope.pageFilter)
			.$promise
			.then(function (data) {
				$scope.ready = true;
				$scope.ads = data;
			});
	}

	updateAds();
	$scope.pageFilter = {};
	$scope.$watch('pageFilter', function(){
		updateAds();

	}, true);
}]);