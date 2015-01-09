app.controller('LoginController', ['$scope', '$location','userRequester',function($scope, $location,userRequester){
	$scope.currentPageName = 'Login';
	$scope.login = function(user){
		userRequester.login(user)
			.$promise
			.then(function (data) {
				$location.path('/');
			});
	};
}]);