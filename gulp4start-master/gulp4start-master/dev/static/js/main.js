//$(document).ready(function () {
//    svg4everybody({});
//
//});

$(document).ready(function () {
    $('.sandwich, .header-nav_title').click(function(){
		var menu = $('.header-nav__list');
		$(this).toggleClass('active');
		if(menu.is(':visible')) {
			menu.slideUp();
		}else{
			menu.slideDown();
		}
		
	})

	$('.reviews-slider-item'). slick({
		autoplay: true,
		autoplaySpeed: 100000,
		dots: true,
		infinite:true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 2,
		prevArrow: '.reviews-slider-prev',
		nextArrow: '.reviews-slider-next',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true

				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});
});



