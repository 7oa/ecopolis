// js jquery
$(document).ready(function() {
	//кнопка наверх
	var top_show = 350; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
	var delay = 1000; // Задержка прокрутки
	$(window).scroll(function () {
		if ($(this).scrollTop() > top_show) $('#top').fadeIn();
		else $('#top').fadeOut();
	});
	$('#top').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});
	//end кнопка наверх


	//слайдер на главной
	var swiper = new Swiper('.index-swiper', {
		pagination: '.index-swiper-pagination',
		paginationClickable: true,
		speed: 1000,
		autoplay: 5500,
		autoplayDisableOnInteraction: false,
		loop: true
	});
	//end слайдер на главной

	//плавное появление
	if($('.js-show_up').length>0){
		$('.js-show_up').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeInUp',
			classToRemove: 'hidden',
			offset: 100
		});
	}
	if($('.js-show_left').length>0){
		$('.js-show_left').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeInLeft',
			classToRemove: 'hidden',
			offset: 100
		});
	}
	if($('.js-show_right').length>0){
		$('.js-show_right').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeInRight',
			classToRemove: 'hidden',
			offset: 100
		});
	}
	//end плавное появление
});