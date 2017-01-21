var $ = require('jquery'),
		owlCarousel = require('owl-carousel'),
		menu = require('./js/modules/menu.js');

$(document).ready(function(){

	menu();
	$('.slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		center: true,
		nav: true,
		navText: ['<svg><use xlink:href="#arrow"></use</svg>','<svg><use xlink:href="#arrow"></use</svg>'],
		dots: false,
		smartSpeed: 1000
	});

	$('.owl-loaded').addClass('owl-carousel');




});

