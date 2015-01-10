app.controller('LoggedInNavController', ['$scope', 'authentication', function($scope, authentication){

	$scope.logoutUser = function() {
		authentication.removeUser();
	};
}]);