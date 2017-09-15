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
		speed: 2000,
		//autoplay: 20000,
		//autoplayDisableOnInteraction: false,
		//loop: true,
		preventClicks: false,
		preventClicksPropagation: false,
		allowSwipeToPrev: false,
		allowSwipeToNext: false

	});
	//end слайдер на главной

	//слайдер в новости
	var swiper = new Swiper('.detail-slider__inner', {
		pagination: '.detail-swiper-pagination',
		nextButton: '.detail-swiper-next',
		prevButton: '.detail-swiper-prev',
		paginationType: 'fraction',
		paginationClickable: true,
		speed: 1000,
		//loop: true
	});
	//end слайдер в новости

	//плавное появление
	if($('.js-show_fadeIn').length>0){
		$('.js-show_fadeIn').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeIn',
			classToRemove: 'hidden',
			offset: 100
		});
	}
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

	//search show
	$(".js-search-show").click(function(){
		$(this).parent().toggleClass("search__wrapper_open");
	});
	//end search show

	$(document).on("click",".js-select",function(){
		$(this).parent().toggleClass("open")
			.children(".select-ul").slideToggle();
	});

	$(document).on("click",".js-opt",function(){
		$(this).toggleClass("selected");

		var option_all = $(".select-ul .selected").map(function () {
			return $(this).text();
		}).get().join('\n');

		$('.select input').val(option_all);
	});

});