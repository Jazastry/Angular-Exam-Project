app.factory('userRequester', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){

	var baseUrl = baseServiceUrl + 'user/';

	function register(user) {
		return $resource(baseUrl + 'register').save(user);
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