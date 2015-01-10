app.factory('filter', function(){

	var filterParams = {};

	function updateTown(town) {
		town ? filterParams.townId = town : delete filterParams.townId;
	}

	function updateCategory(category) {

		category ? filterParams.categoryId = category : delete filterParams.categoryId;	
	}

	function updatePage(page) {
		filterParams.startPage = page;
	}

	function getFilterParams() {
		return filterParams;
	}

	return {
		updateTown: updateTown,
		updateCategory: updateCategory,
		updatePage: updatePage,
		getFilterParams: getFilterParams		 
	};
});