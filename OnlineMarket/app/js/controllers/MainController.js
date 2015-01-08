app.controller('MainController', function($scope, $http, adsRequester){	
	var currentTownId = undefined;
	var currentCategoryId = undefined;
	var currentPage = 1;
	var pagesize = 2;
	var paginationLength = 3;
	var ads = adsRequester.getAll('ads', currentTownId, currentCategoryId, 1, 2);
	// var pages = adsRequester.getAll('ads', undefined, undefined, 1, 100)
	// 	.$promise.then(function(ads){
	// 		$scope.pages = ads.numPages;
	// });


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

	var updateAds = function(category, town, currentPage, pagesize, numPages, pagCase){	
	//              function getAllAds(item, townid, categoryid, currentPage, pagesize)	
		ads = adsRequester.getAll('ads', town, category, currentPage, pagesize);
		$scope.ads = ads;
		$scope.numPages = numPages;
		$scope.currentPage = currentPage;
		if (pagCase !== undefined) {
			updatePagination(pagCase, numPages);
		}
	};

	var updatePagination = function ( paginationCase, numPages){
		var pageArray = [];
		var length = 3;
		var start;
		var end;
		switch(paginationCase) {
			case 0:
				start = 1;
				if (numPages <= length) {
					end = numPages;	
					angular.element('#pagNext').addClass('disabled');
					$scope.nextDisabled = true;				
				} else {
					end = start + length;
				}
				pageArray = _.range(start, end);
				$scope.pageArray = pageArray;
				break;
			case 1:
				start = $scope.pageArray.length + 1;
				if ($scope.numPages <= $scope.pageArray.length + length) {
					end = $scope.numPages + 1;
					angular.element('.pagNext').addClass('disabled');
					$scope.nextDisabled = true;
				} else if ($scope.numPages >= $scope.pageArray.length + length) {
					end = start + length;
				}

				pageArray = _.range(start, end);
				$scope.pageArray = pageArray;
				break;
			case -1:
				end = $scope.pageArray[0];
				if (($scope.pageArray[0] - length) <= 0) {
					start = 1;
				} else {
					start = $scope.pageArray[0] - length;
				}

				pageArray = _.range(start, end);
				$scope.pageArray = pageArray;
				break;					
			default:
				break;		
		}
		console.log($scope.pageArray);
	};

	var isDisabled = function(){

	};

	var numbToPageArray = function (number) {
		var arr = [];
		for (var i = 0; i < number; i++) {
			arr[i] = i+1;
		}

		return arr;
	};

	$scope.ads = ads;
	$scope.pageArray;
	$scope.updatePagination = updatePagination;
	$scope.currentPageName = 'Home';
	$scope.currentPage = currentPage;
	$scope.pagesize = pagesize;
	$scope.updateAds = updateAds;
	$scope.currentTown = currentTownId;
	$scope.currentCategory = currentCategoryId;	
	$scope.towns = adsRequester.getArray('towns');
	$scope.categories = adsRequester.getArray('categories');
	$scope.townFilter = townFilter;
	$scope.categoryId = undefined;
	$scope.townId = undefined;
	$scope.assignFilterVal = assignFilterVal;
});

// GET api/Ads?CategoryId={CategoryId}&TownId={TownId}&StartPage={StartPage}&PageSize={PageSize}