// js jquery
$(document).ready(function() {
	//popup
	$('.js-open-callback').click( function(event){
		event.preventDefault();
		$('#callback__overlay').fadeIn(400,
			function(){
				$('#callback')
					.css('display', 'block')
					.animate({opacity: 1}, 200);
				$('.callback-inner').animate({"margin-top": "30px"}, 200);
			});
		$("body").css('overflow-y','hidden');
	});
	$('#callback__close, #callback__overlay').click( function(){
		$('#callback')
			.animate({opacity: 0}, 200,
				function(){
					$(this).css('display', 'none');
					$('#callback__overlay').fadeOut(400);
				}
			);
		$('.callback-inner').animate({"margin-top": "0px"}, 200);
		$("body").css('overflow-y','auto');
	});
});