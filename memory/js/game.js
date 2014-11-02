$(document).ready(function() {
	var numbers = _.range(1,4); 	// Gives an array of 1 to 3
	numbers = _(numbers).map(function (i) {
		return [i, i];
	});
	numbers = _(numbers).flatten();
	numbers = _(numbers).shuffle(); // Shuffles on the array called numbers
	// console.log(numbers);

	_(numbers).each(function (i) {
		var template = $('#cardTemplate').html();
		var cardHTML = Handlebars.compile(template);
		$('body').append( cardHTML ({number: i} ) );
	});

	$('.card-container').on('click', function() {
		$(this).toggleClass('flipped');
		if ($('.flipped').length === 2) {
			console.log("hello need to flip me back!");
			$('.flipped').delay(1000).queue(function(){
				$('.flipped').removeClass('flipped');
			});
		}
	});



});