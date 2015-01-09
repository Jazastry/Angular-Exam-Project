app.controller('HomePublicController', 
	['$scope', '$http', 'adsRequester',	function($scope, $http, adsRequester){	
	var currentPage = 1;
	var pagesize = 2;

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

	var updateAds = function(category, town, currentPage, pagesize, pgeNumb){	
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
	};

	var updatePagination = function ( paginationCase){
		var pageArray = [];
		var length = 3;
		var start;
		var end;
		switch(paginationCase) {
			case 0:
				start = 1;
				if ($scope.numPages <= length) {
					end = $scope.numPages;	
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

	$scope.ready = false;
	$scope.pageArray;
	$scope.updatePagination = updatePagination;
	$scope.currentPageName = 'Home';
	$scope.currentPage = currentPage;
	$scope.pagesize = pagesize;
	$scope.updateAds = updateAds;		
	$scope.townFilter = townFilter;
	$scope.categoryId = undefined;
	$scope.townId = undefined;
	$scope.assignFilterVal = assignFilterVal;
}]);