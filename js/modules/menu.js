module.exports = function(){

	var MenuItem = $('.service-menu__item');
	$('.service-menu__item').on('click', function(){
		$(this).find('.service-menu__arrow').toggleClass('service-menu__arrow-top');
		if( $(this).children('.service-menu__hidden').hasClass('visible-menu') ){
			$(this).children('.service-menu__hidden').removeClass('visible-menu');
		}else{
			$('.service-menu__hidden').removeClass('visible-menu');
			$(this).children('.service-menu__hidden').addClass('visible-menu');
		}

	});
}