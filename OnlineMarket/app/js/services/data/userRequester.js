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
		var resource = $resource(baseUrl + 'login')
			.save(user);
		resource.$promise
			.then(function(data){
				authentication.saveUser(data);
			});

		return resource;	
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