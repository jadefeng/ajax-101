// var mario = 'mario luigi princesspeach browser yoshi'.split(' ');
var bros = [
	{
		'name': 'Groucho',
		'instrument': 'Guitar'	
	},
	{
		'name': 'Chico',
		'instrument': 'Piano'	
	}
];
console.log(bros);


var badBrotherHTML = function(brother) {
  var str = "";
  str += "<li>";
  str += brother.name;
  str += " plays ";
  str += "<i>" + brother.instrument + "</i>";
  str += "</li>";
  return str;
};

$(document).ready(function () {
	var source = $('#brotherTemplate').html();
	var brotherHTML = Handlebars.compile(source);

	$.each(bros, function(index, brother) {
		console.log(brother);

		$('#bros').append( brotherHTML(brother) );
		// $('#bros').append( badBrotherHTML(brother) );
	});
});