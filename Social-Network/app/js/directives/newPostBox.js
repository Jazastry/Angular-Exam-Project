app.directive('newPost', function(){
	return {
		controller: 'NewPostController',
		restrict: 'E',
		templateUrl: 'templates/user/newPostBox.html',
		replace: true	
	};
});