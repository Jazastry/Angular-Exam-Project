app.controller('MainController', function($scope, $http, adsRequester){	
	var currentTownId = undefined;
	var currentCategoryId = undefined;
	var currentPage = 1;
	var pagesize = 2;
	var paginationLength = 3;
	var ads = adsRequester.getAll('ads', currentTownId, currentCategoryId, 1, 2);

	var assignFilterVal = function(categoryId, townId){
		if (categoryId !== undefined) {
			$scope.categoryId = parseInt(categoryId);
			//console.log('cat: ' + $scope.categoryId + ', tow: ' + $scope.townId);
		} else {
			$scope.categoryId = undefined;
		}
		if (townId !== undefined) {
			$scope.townId = parseInt(townId);
			//console.log('cat: ' + $scope.categoryId + ', tow: ' + $scope.townId);
		} else {
			$scope.townId = undefined;
		}	
	};
	
	var townFilter = function(townId) {
		var town = _.filter($scope.towns, function(town){
			return parseInt(town.id) === parseInt(townId);
		});

		return town;
	};

	var updateAds = function(category, town, currentPage, pagesize, numPages){	
	//              function getAllAds(item, townid, categoryid, currentPage, pagesize)	
		ads = adsRequester.getAll('ads', town, category, currentPage, pagesize);
		$scope.ads = ads;
		$scope.numPages = numPages;
		$scope.currentPage = currentPage;
	};

	var updatePagination = function (selectedPage, numPages){
		var pageArray = [];
		var length = 3;
		var start = 1;
		var end = start + length;
		console.log('length-'+length+';start-'+start+';end'+end);
		console.log(pageArray);
		// if ((selectedPage < pageArray[0]) || (selectedPage > pageArray[pageArray.length])) {

		// }

		pageArray = _.range(start, end);
	};

	var numbToPageArray = function (number) {
		var arr = [];
		for (var i = 0; i < number; i++) {
			arr[i] = i+1;
		}

		return arr;
	};

	$scope.updatePagination = updatePagination;
	$scope.currentPageName = 'Home';
	$scope.currentPage = currentPage;
	$scope.pagesize = pagesize;
	$scope.updateAdsFilter = updateAdsFilter;
	$scope.currentTown = currentTownId;
	$scope.currentCategory = currentCategoryId;
	$scope.ads = ads;	
	$scope.towns = adsRequester.getArray('towns');
	$scope.categories = adsRequester.getArray('categories');
	$scope.townFilter = townFilter;
	$scope.categoryId = undefined;
	$scope.townId = undefined;
	$scope.assignFilterVal = assignFilterVal;
});

// GET api/Ads?CategoryId={CategoryId}&TownId={TownId}&StartPage={StartPage}&PageSize={PageSize}