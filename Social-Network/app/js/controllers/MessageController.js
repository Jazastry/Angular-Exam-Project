app.controller('MessageController', ['$scope', function($scope){

	$scope.$watch('message', function(){
		$scope.messageCss = "";
	}, true);
}]);