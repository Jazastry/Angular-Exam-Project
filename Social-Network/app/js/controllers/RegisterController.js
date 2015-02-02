app.controller('RegisterController', ['$scope', '$location', 'userRequester', 'notify',
		function($scope, $location, userRequester, notify){
	$scope.currentPage = " Register";
	$scope.send = false;

	$scope.register = function(userData){
		$scope.send = true;

		if (userData.username && userData.password && userData.fullName) {
			userRequester.register(userData)
				.success(function(){
					console.log('Registred !');
					$location.path('/login');
					notify({message:'Successful Register !', classes: 'success-noty'});
				}).error(function(message){
					console.log(message);
					notify({message:'Unable to Register, '+ message.error +' ! ', classes: 'error-noty'});
				});
		}
	};
}]);