app.factory('adsRequester', function($resource){

	// $resource(url, [paramDefaults], [actions], options)
	var data = $resource(
		'http://localhost:1337/api/:item',
		{item:'@item', townid:'@townid', categoryid:'@categoryid'},
		{update: {method: 'PUT'}
		} 
	);// /ads?townid=10&categoryid=8
	function getAllAds(item, townid, categoryid) {
		return data.get({item:item}, {townid:townid,categoryid:categoryid});
	}

	function createNewAd(ad) {
		return data.save(ad);
	}

	function getAdById(item, id) {
		return data.get({item:item},{id:id});
	}

	function editAd(id, ad) {
		return data.update({id: id}, ad);
	}

	function deleteAd(id) {
		return data.delete({id: id});
	}

	return {
		getAll: getAllAds,
		create: createNewAd,
		getById: getAdById,
		edit: editAd,
		delete: deleteAd
	};
});