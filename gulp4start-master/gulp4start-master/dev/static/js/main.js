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
		
  $(".scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1500);
    return false;
	})
})

	$('.form--secrets').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
			
			form.find('.g-input').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
				form.find('.g-input').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border':'1px solid red','font-weight':'bold'
				   });
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
		
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},500);

			btn.click(function(){
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
					form.submit();
				}
			});
			
		});



  $('.reviews-slider-item'). slick({
		autoplay: true,
		autoplaySpeed: 700000,
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



