app.factory('userRequester', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){

	var user = $resource(
		baseServiceUrl + 'user/:item',
		{item:'@item',user:'@user'},
		{get: {method: 'GET'},
		 getArray: {method: 'GET', isArray:true}
		} 
	);

	function register(user) {
		return user.post({item:'register'},{user:user});
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