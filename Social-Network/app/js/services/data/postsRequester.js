app.factory('postsRequester', ['$resource', '$http', 'baseServiceUrl', 
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

	function getAllposts () {

		var params = {include:'createdBy'};

		return makeRequest('classes/Post', 'GET', null, params);
	}

	function createNewPost(ad) {
		return $http.post(baseServiceUrl+'user/ads', ad,{headers:authentication.getHeaders()});
	}

	function getPostById(item, id) {
		return ads.get({item:item},{id:id});
	}

	function editPost(id, ad) {
		return ads.update({id: id}, ad);
	}

	function deletePost(id) {
		return ads.delete({id: id});
	}

	return {
		getAllposts: getAllposts,
		create: createNewPost,
		getById: getPostById,
		edit: editPost,
		delete: deletePost
	};
}]);