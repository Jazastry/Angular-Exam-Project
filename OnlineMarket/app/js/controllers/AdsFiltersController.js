app.controller('AdsFiltersController',
	 ['$scope', '$rootScope', 'townsRequester', 'categoriesRequester', 'adsRequester', 'filter',
	 	 function($scope, $rootScope, townsRequester, categoriesRequester, adsRequester, filter){

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

	$scope.categoryChanged = function(category){
		filter.updateCategory(parseInt(category));
		$scope.pageFilter = filter.getFilterParams();
		//console.log($scope.pageFilter);
	};

	$scope.townChanged = function(town){
		filter.updateTown(parseInt(town));
		$scope.pageFilter = filter.getFilterParams();
		//console.log($scope.pageFilter);
	};

	$scope.updateAds = updateAds;
	$scope.towns = townsRequester.getAllTowns();
	$scope.categories = categoriesRequester.getAllCategories();
	
	$scope.currentTown;
	$scope.currentCategory;
}]);