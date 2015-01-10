app.factory('adsRequester', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
	// $resource(url, [paramDefaults], [actions], options)
	var ads = $resource(
		baseServiceUrl + 'ads',
		{},
		{get: {method: 'GET'},
		 getArray: {method: 'GET', isArray:true},
		 update: {method: 'PUT'}
		} 
	);

	function getPublicAds (filter) {
		return ads.get(filter);
	}

	function createNewAd(ad) {
		return ads.save(ad);
	}

	function getAdById(item, id) {
		return ads.get({item:item},{id:id});
	}

	function editAd(id, ad) {
		return ads.update({id: id}, ad);
	}

	function deleteAd(id) {
		return ads.delete({id: id});
	}

	return {
		getPublicAds: getPublicAds,
		create: createNewAd,
		getById: getAdById,
		edit: editAd,
		delete: deleteAd
	};
}]);