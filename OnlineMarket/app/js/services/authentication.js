app.factory('authentication', ['localStorageService', function(localStorageService){

	var key = 'user';

	function saveUserData (val) {
		localStorageService.set(key,val);
		console.log(localStorageService.get(key));
	}

	function getUserData() {
		return localStorageService.get(key);
	}

	return {
		saveUser: saveUserData,
		getUser: getUserData
	};
}]);