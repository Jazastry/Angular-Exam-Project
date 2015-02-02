app.directive('postsPage', function(){
	return {
		//controller: 'PostsPageController',
		restrict: 'E',
		templateUrl: 'templates/user/postsPage.html',
		replace: true	
	};
});