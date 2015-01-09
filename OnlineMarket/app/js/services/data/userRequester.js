app.factory('userRequester', ['$resource', 'baseServiceUrl', 'authentication',
			 function($resource, baseServiceUrl, authentication){

	var baseUrl = baseServiceUrl + 'user/';

	function register(user) {
		return $resource(baseUrl + 'register')
			.save(user)
			.$promise
			.then(function(data){
				authentication.saveUser(data);
			});
	}

	function login(user) {
		return $resource(baseUrl + 'login')
			.save(user)
			.$promise
			.then(function(data){
				authentication.saveUser(data);
				authentication.isAdmin();
			}, function(error){
				console.log(error);
			});
	}

	function logout () {
		return $resource(baseUrl + 'logout')
			.save(user)
			.$promise
			.then(function(data){
				authentication.removeUser();
			});
	}

	return {
		register: register,
		login: login,
		logout: logout
	};
}]);