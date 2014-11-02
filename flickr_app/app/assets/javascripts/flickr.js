$(document).ready(function () {
  $('#search').on('click', searchFlickr);
  $('#clear').on('click', clearPhotos);
  $(window).on('scroll', maybeLoad);
});

var counter = 0;

var clearPhotos = function () {
	counter = 0;
	endOfResults = false;
	$('#images').empty();
};

var requestInProgress = false;

var maybeLoad = function() {
	if (requestInProgress) {
		return; 	// Abort
	}

	var scrollTop = $(window).scrollTop();
	var docHeight = $(document).height();
	var windowHeight = $(window).height();

	if (scrollTop > docHeight - (2 * windowHeight) ) {
		searchFlickr();
	}
};

var searchFlickr = function (event) {
  var query = $('#query').val();
  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  requestInProgress = true;
  counter += 1;

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    page: counter,
    format: 'json'
  }, processImages);
  console.log(flickrUrl);
};

var processImages = function (result) {
	requestInProgress = false;

	if (result.photos.length === 0) {
		endOfResults = true;
	}
	
	if (result.stat != 'ok') {
		return;
	}

	console.log(result.photos);
	// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

	_(result.photos.photo).each(function (photo) {
		var url = ['https://farm', 
					photo.farm, 
					'.staticflickr.com/', 
					photo.server,
					'/',
					photo.id,
					'_',
					photo.secret,
					'_q.jpg' ].join(''); 	// Interpolation with JS
		// console.log(url);

		$('<img>', {
			src: url
			// title: 'kitty'
		}).appendTo('#images').fadeIn();
	});
};