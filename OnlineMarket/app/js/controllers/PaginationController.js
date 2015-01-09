app.controller('PaginationController', ['$scope', function($scope){
	var updatePagination = function (paginationCase){
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

	$scope.updatePagination = updatePagination;
}]);