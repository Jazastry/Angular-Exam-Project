app.factory('adsUpdater', ['$scope', 'adsRequester', function($scope, adsRequester){

	function updateAds(category, town, currentPage, pagesize, pgeNumb){	
		// function getAllAds(item, townid, categoryid, currentPage, pagesize)	
		adsRequester.getPublicAds(town, category, currentPage, pagesize)
			.$promise
			.then(function(data){
				$scope.ads = data;
				$scope.numPages = data.numPages;
			});
		
		$scope.currentPage = currentPage;
		if (pgeNumb !== undefined) {
			updatePagination(pgeNumb);
		}
	}

	return {
		updateAds: updateAds	
	};
}]);