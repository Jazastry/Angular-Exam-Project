app.controller('AdsPublicController', ['$scope', 'adsRequester', function($scope, adsRequester){
	$scope.ready = false;
	adsRequester.getPublicAds(undefined, undefined, $scope.currentPage, $scope.pagesize)
		.$promise
		.then(function (data) {
			$scope.ready = true;
			$scope.ads = data;
		});
}]);