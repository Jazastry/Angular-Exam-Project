app.factory('userRequester', ['$resource', 'baseServiceUrl', 'authentication',
			 function($resource, baseServiceUrl, authentication){

	var baseUrl = baseServiceUrl + 'user/';

	function register(user) {
		return $resource(baseUrl + 'register')
			.save(user)
			.promise
			.then(function(data){
				authentication.saveUser(data);
			});
	}

	function login(user) {
		// body...
	}

	function logout () {
		// body...
	}

	return {
		register: register,
		login: login,
		logout: logout
	};
}])