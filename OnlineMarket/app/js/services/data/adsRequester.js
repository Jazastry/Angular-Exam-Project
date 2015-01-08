app.factory('adsRequester', function($resource){
	// $resource(url, [paramDefaults], [actions], options)
	var ads = $resource(
		'http://localhost:1337/api/:item',
		{item:'@item', townid:'@townid', categoryid:'@categoryid', startpage:'@startpage', pagesize:'@pagesize'},
		{get: {method: 'GET'},
		 getArray: {method: 'GET', isArray:true}
		} 
	);

	var Ads = (function(){
		function Ads(){
			
		}
	});
	function getAllAds(item, townid, categoryid, startpage, pagesize) {
		return ads.get({item:item}, {townid:townid, categoryid:categoryid, startpage:startpage, pagesize:pagesize});
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

	function arrayGetAll(item) {
		return ads.getArray({item:item});
	}

	return {
		getArray: arrayGetAll,
		getAll: getAllAds,
		create: createNewAd,
		getById: getAdById,
		edit: editAd,
		delete: deleteAd
	};
});