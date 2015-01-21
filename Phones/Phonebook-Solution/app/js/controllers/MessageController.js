app.controller('MessageController', ['$scope', function($scope){

	// function successMessage(message) {		
	// 	 $('.notifications').show().text($scope.message)
	// 	.css({'background-color':'#59D92F',
	// 		'position':'absolute',
	// 		'top':'30px',
	// 		'left':'30%',
	// 		'border':'1px solid #000',
	// 		'border-radius':'4px',
	// 		'padding':'10px',
	// 		'color':'#FFF',
	// 		'font-size':'20px'})
	// 	.fadeOut(4000);
	// }

	// function errorMessage(message) {		
	// 	$('.notifications').show().text($scope.message)
	// 	.css({'background-color':'#FF0000',
	// 		'position':'absolute',
	// 		'top':'30px',
	// 		'left':'30%',
	// 		'border':'1px solid #000',
	// 		'border-radius':'4px',
	// 		'padding':'10px',
	// 		'color':'#FFF',
	// 		'font-size':'20px'})
	// 	.fadeOut(4000);
	// }

	$scope.$watch('message', function(){
		$scope.isSuccess ? successMessage() : errorMessage()
	}, true);
}]);