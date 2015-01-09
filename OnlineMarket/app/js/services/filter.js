app.factory('filter', function(){

	var filterParams = {};

	function updateTown(town) {
		filterParams.townId = town.id;
	}

	function updateCategory(category) {
		filterParams.categoryId = category.id;
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