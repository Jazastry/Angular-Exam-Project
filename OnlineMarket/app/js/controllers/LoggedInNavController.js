app.controller('LoggedInNavController', ['$scope', 'authentication', function($scope, authentication){

	$scope.logoutUser = function() {
		authentication.removeUser();
	};

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
}]);