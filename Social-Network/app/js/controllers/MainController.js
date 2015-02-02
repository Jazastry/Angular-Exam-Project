app.controller('MainController', ['$scope','$location', 'localStorageService', 'userRequester', 'notify',
		function($scope, $location, localStorageService, userRequester, notify){
	$scope.message = "";
	$scope.messageCss = "";
	$scope.isSuccess = true;
	$scope.isLogged = false;
	$scope.word = /^\w*$/;

	$scope.logOut = function(){

		console.log('LogOut');
		localStorage.clear();
		$location.path('/');
	};

	notify.config({	
		duration: 4000
	});

	$scope.$on('$routeChangeStart', function(next, current) { 
		var currentPage = $location.path();
		console.log(currentPage);
		if (currentPage !== '/' &&
			currentPage !== '/login' &&
			currentPage !== '/register') {
	   		userRequester.validateUser()
	   			.error(function(){
	   				$location.path('/');
	   			});
		}
 	});
}]);