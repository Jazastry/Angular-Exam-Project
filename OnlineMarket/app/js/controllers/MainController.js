app.controller('MainController', ['$scope', 'localStorageService', function($scope, localStorageService){
	$scope.alerts = [];

	$scope.userNow = "Jazastry";
	$scope.$watch('isLoggedIn', function(){
		$scope.userNow = localStorageService.get('user').username;
	}, true);
}]);