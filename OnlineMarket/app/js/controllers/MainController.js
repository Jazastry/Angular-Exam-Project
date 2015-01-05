app.controller('MainController', function($scope, $http, adsRequester){	
	var currentTownId = undefined;
	var currentCategoryId = undefined;
	var currentPageNumb = 1;
	var pagesize = 2;
	 // function getAllAds(item, townid, categoryid, startpage, pagesize)
	var ads = adsRequester.getAll('ads', currentTownId, currentCategoryId, 1, 2);
	// var numPages = numbToPageArray(ads.numPages);

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

	var updateAdsFilter = function(category, town, startpage, pagesize){	
	//              function getAllAds(item, townid, categoryid, startpage, pagesize)	
		ads = adsRequester.getAll('ads', town, category, startpage, pagesize);
		$scope.ads = ads;
	};

	var processPagination = function (clickedPage){

	};

	var numbToPageArray = function (number) {
		var arr = [];
		for (var i = 0; i < number; i++) {
			arr[i] = i+1;
		}

		return arr;
	};

	$scope.numbToPageArray = numbToPageArray;
	$scope.currentPageName = 'Home';
	$scope.currentPageNumb = currentPageNumb;
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

	//console.log(ads.ads);
	// console.log($scope.ads.numPages);
});

// GET api/Ads?CategoryId={CategoryId}&TownId={TownId}&StartPage={StartPage}&PageSize={PageSize}