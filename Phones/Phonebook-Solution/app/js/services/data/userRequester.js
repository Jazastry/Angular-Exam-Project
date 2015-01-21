app.factory('userRequester', ['$resource', '$http', 'baseServiceUrl', 
	'parseAppId', 'parseRestApiKey', 
 			function($resource, $http, baseServiceUrl, parseAppId, parseRestApiKey){

 	var headers = {
 		'X-Parse-Application-Id': parseAppId,
 		'X-Parse-REST-API-Key': parseRestApiKey,
 		"X-Parse-Session-Token": localStorage.sessionToken,
 		"Content-Type": "application/json"
 	};

	var makeRequest = function(url, method, data, params) {
		return $http({
			method: method,
			headers: headers,
			url: baseServiceUrl + url,
			data: data,
			params: params
		});
	};

 	function login(user) {
 		var data = {"username":user.username,"password":user.password};
 		var request = makeRequest('login', 'GET', null, data);

 		return request;		
 	}

 	function register(user){
 		return makeRequest('');
 	}

	return{
		login: login
	};
}]);