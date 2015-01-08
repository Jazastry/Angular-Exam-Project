app.factory('globals', ['$scope', function($scope){
	var globals = (function(){
		$scope.currentPageName;
	});

	return {
		globals: globals
	};
}]);