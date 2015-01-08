app.directive('adsPublic', function(){
	return {
		controller: 'HomeController',
		restrict: 'E',
		templateUrl: 'templates/public/adsPublic.html',
		replace: true	
	};
});