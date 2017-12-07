var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

function main(){

	$('.button').click(function(){
		var animal = $(this).data('animal');
		var image = species[animal];
		$('#holder').html('<img src="img/' + image + '" alt="" />');
	})
	 
}

$(document).ready(function(){
	main();
});