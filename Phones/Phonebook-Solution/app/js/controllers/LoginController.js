app.controller('LoginController', ['$scope', 'localStorageService', 'userRequester',
		function($scope, localStorageService, userRequester){
	$scope.currentPage = " Loggin";

	$scope.login = function logIn(userData){

		console.log(userData);

		userRequester.login(userData)
			.success(function(data){
				localStorageService.set('sessionToken',data.sessionToken);
				$scope.isSuccess = true;
				$scope.message = "Successfull Loggin!";
			}).error(function(message){
				$scope.isSuccess = false;
				$scope.message = message;
			});

	};	
}]);