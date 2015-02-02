app.controller('LoginController', ['$scope', '$location', 'localStorageService', 'userRequester', 'notify',
		function($scope, $location, localStorageService, userRequester, notify){
	$scope.send = false;

	$scope.login = function login(userData){
		$scope.send = true;
		if (userData.username && userData.password) {
			userRequester.login(userData)
				.success(function(){
					$location.path('/user/home');
					notify({message:'Successfull to Login !', classes: 'success-noty'});			
				}).error(function(message){
					notify({message:'Unable to Login, '+ message.error +' !', classes: 'error-noty'});
				});
		}
	};	
}]);