app.directive('userHeader', function(){
	return {
		//controller: 'UserHeader',
		restrict: 'E',
		templateUrl: 'templates/user/userHeader.html',
		replace: true	
	};
});