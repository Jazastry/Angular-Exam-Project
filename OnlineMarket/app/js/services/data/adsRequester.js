app.factory('adsRequester', ['$resource', 'baseServiceUrl', function($resource, baseServiceUrl){
	// $resource(url, [paramDefaults], [actions], options)
	var ads = $resource(
		baseServiceUrl + ':item',
		{item:'@item', townid:'@townid', categoryid:'@categoryid', startpage:'@startpage', pagesize:'@pagesize'},
		{get: {method: 'GET'},
		 getArray: {method: 'GET', isArray:true},
		 update: {method: 'PUT'}
		} 
	);

	function getPublicAds (townid, categoryid, startpage, pagesize) {
		return ads.get({item:'ads'}, {townid:townid, categoryid:categoryid, startpage:startpage, pagesize:pagesize});
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