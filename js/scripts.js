// app = [];	

	var etsyCall = $.ajax({
		url: "https://openapi.etsy.com/v2/listings/active.js",
		type: "GET",
		dataType: "jsonp",
		data: {
			api_key: "hbizcfvbrwvtk55vvj68ohdm",
			location: "Calgary",
			keywords:"handmade",
			who_made: "i_did"
		},
		// success: function(){
		// console.log("It worked!");}
	});

	$.when(etsyCall).then(function(res) {
		var etsyResult = res;
		console.log(etsyResult);
		// app.displayVenues(venueResult);
	});