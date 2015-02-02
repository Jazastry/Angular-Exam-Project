app.factory('userRequester', ['$resource', '$http', 'localStorageService', 'baseServiceUrl', 
	'parseAppId', 'parseRestApiKey', 
 			function($resource, $http, localStorageService, baseServiceUrl, parseAppId, parseRestApiKey){

	var makeRequest = function(url, method, data, params, contentType) {

		var headers = {
			'X-Parse-Application-Id': parseAppId,
	 		'X-Parse-REST-API-Key': parseRestApiKey,
	 		"X-Parse-Session-Token": localStorage.sessionToken,
	 		"Content-Type": "application/" + contentType
	 	};

		return $http({
			method: method,
			headers: headers,
			url: baseServiceUrl + url,
			data: data,
			params: params
		});
	};

	function uploadImage(image){

	}

 	function login(user) {
 		var param = {"username":user.username,"password":user.password};
 		var request = makeRequest('login', 'GET', null, param, 'json');
 		request.success(function(data){
 			localStorage.user = data;
 			localStorage.sessionToken = data.sessionToken;
 		});
 		return request;		
 	}

 	function validateUser(){
 		return makeRequest('users/me', 'GET', null, null, 'json');
 	}

 	function register(user){
 		var data = {
 			"username":user.username,
			"password":user.password,
			"fullName":user.fullName,
			"about":user.about,
			"gender":user.gender,
		};
 		return makeRequest('users', 'POST', data, null, 'json');
 	}

	return{
		login: login,
		validateUser: validateUser,
		register: register
	};
}]);