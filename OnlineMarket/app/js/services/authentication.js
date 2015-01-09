app.factory('authentication', ['localStorageService', function(localStorageService){

	var key = 'user';

	function saveUserData (val) {
		var data = angular.toJson(val);
		localStorageService.set(key,data);
		console.log(localStorageService.get(key));
	}

	function getUserData() {
		return localStorageService.get(key);
	}

	function getHeaders () {
		var headers = {};
		var userData = getUserData();
		if (userData) {
			headers.Authorization = 'Bearer ' + userData.access_token;
		}

		return headers;
	}

	function removeUserData() {
		return localStorageService.remove(key); // returns true if succeed
	}

	function isUserAdmin() {		
		var isAdmin = getUserData().isAdmin;

		return isAdmin;
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData,
		removeUser: removeUserData,
		getHeaders: getHeaders,
		isAdmin: isUserAdmin
	};
}]);