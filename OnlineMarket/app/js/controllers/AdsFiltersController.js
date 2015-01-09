app.controller('AdsFiltersController',
	 ['$scope', 'townsRequester', 'categoriesRequester', 'adsRequester',
	 	 function($scope, townsRequester, categoriesRequester, adsRequester){

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
			$scope.updatePagination(pgeNumb);
		}
	}

	$scope.updateAds = updateAds;
	$scope.towns = townsRequester.getAllTowns();
	$scope.categories = categoriesRequester.getAllCategories();
	$scope.currentTown;
	$scope.currentCategory;
}]);