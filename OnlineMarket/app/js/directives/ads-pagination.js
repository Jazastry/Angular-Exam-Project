app.directive('adsPagination', function () {
	return {
		controller: 'PaginationController',
		restrict: 'E',
		templateUrl: 'templates/public/adsPagination.html',
		replace: true
	};
});