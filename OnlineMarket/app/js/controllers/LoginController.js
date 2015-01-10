app.controller('LoginController', ['$scope', '$location','userRequester',function($scope, $location,userRequester){
	$scope.currentPageName = 'Login';
	$scope.redirectTo = function (newLocation) {
		console.log(newLocation);
	    return $location.path(newLocation);
	};
	//$scope.alerts.push({type: 'success', msg: 'Logged In Successfully.'});
	$scope.login = function(user){
		userRequester.login(user)
			.$promise
			.then(function (data) {
				$location.path('/');
				$scope.alerts.push({type: 'success', msg: 'Logged In Successfully.'});
			}, function(error){
				console.log(error.data.error_description);
				$scope.alerts.push({type: 'danger', msg:  error.data.error_description});
			});
	};
}]);