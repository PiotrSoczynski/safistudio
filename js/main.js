(function ($) {
"use strict";

/* ---------------------------------------------- /*
* Slider
/* ---------------------------------------------- */


$('.hero-slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
	navText:['<i class="pe-7s-angle-left"></i>','<i class="pe-7s-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
			nav:false,
        },
        767:{
            items:1,
			nav:false,
        },
        1000:{
            items:1
        }
    }
})

})(jQuery);	