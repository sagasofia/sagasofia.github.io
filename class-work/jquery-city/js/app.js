
$('.thumb').click(function (){
	var newImg = $(this).attr('src')
 	$('#bigimage').attr('src', newImg) 
}) 