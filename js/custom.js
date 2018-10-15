(function( $ ){
  "use strict";
	$(document).ready(function() {

		AOS.init();

		/*-------- Smooth scroll css ------------*/

		var header_height = $('nav').height();
		$('nav a[href^="#"]').click(function () {
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);

	    return false;
		});

		/*----------- Counter js----------------*/

		$('.counter').counterUp({
      delay: 10,
      time: 2000
    });

    // Owl-carousel js
    $('.owl-carousel').owlCarousel({
      items: 3,
      loop:true,
      margin:10,
      dots: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });

    // Portfolio js
    var $container = $('.portfolioContainer');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
 
    $('.portfolioFilter a').click(function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    }); 

    //  Back to top js
    
    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('.back_to_top').fadeIn();
      } else {
        $('.back_to_top').fadeOut();
      }
    }); 

    $('.back_to_top a').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

	});
	$(window).scroll(function() {
		var header_height = $('nav').height();
		if($(window).scrollTop()>=header_height){
			$('nav').addClass("fixed-header");
		}
		else {
			$('nav').removeClass("fixed-header");
		}
	});

})( jQuery );