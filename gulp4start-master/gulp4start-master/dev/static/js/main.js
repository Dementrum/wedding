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
		dots: true,
		infinite:true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 2,
		
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,

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



