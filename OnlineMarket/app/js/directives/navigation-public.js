app.directive('navigationPublic', function(){
	return {
		controller: 'HomeController',
		restrict: 'E',
		templateUrl: 'templates/public/navigationPublic.html',
		replace: true
	};
});