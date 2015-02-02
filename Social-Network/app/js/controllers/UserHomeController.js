app.controller('UserHomeController', ['$scope', 'postsRequester', 'localStorageService',
		function($scope, postsRequester, localStorageService){
	$scope.isPosting = false;

	function getAllposts(){

		console.log('Posts');

		postsRequester.getAllposts()
			.success(function(data){
				console.log(data);
				$scope.posts = data;
			}).error(function(){
		});
	}

	getAllposts();


}]);