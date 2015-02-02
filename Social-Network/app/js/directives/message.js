app.directive('message', function(){
	return {
		controller: 'MessageController',
		restrict: 'E',
		templateUrl: 'templates/public/mesage.html',
		replace: true	
	};
});