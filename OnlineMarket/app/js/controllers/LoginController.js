app.controller('LoginController', ['$scope', 'userRequester',function($scope, userRequester){
	$scope.currentPageName = 'Login';
	$scope.login = function(user){
		userRequester.login(user);
	};
}]);