app.factory('authentication', ['localStorageServiceProvider', function(localStorageServiceProvider){

	var key = 'user';

	function saveUserData (data) {
		localStorageServiceProvider.set(key,data);
	}

	function saveUserData (data) {
		localStorageServiceProvider.get(key);
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData
	};
}])