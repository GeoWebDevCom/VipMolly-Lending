$(document).ready(function() {


	$(".toggle-menu").click(function () {
		$(".main-menu").slideToggle();
		return false;
	});


    //video-carousel
    $('.video-carousel').owlCarousel({
        items:1,
        loop:true,
        lazyLoad:true,
        center:true,
        mouseDrag: true,
        merge:true,
        nav: true,
        video: true,
        autoplayHoverPause: true,
        navText: ["", ""],
        dots: true
    });

    //comments-carousel
    $('.comments-carousel').owlCarousel({
        loop:true,
        items: 1,
        nav:true,
        navText: ["", ""],
        dots: true,
        mouseDrag: true
    }); 

	//навигацыя по сайту
 	$(".arrow-down, .nav, .arrow-top").mPageScroll2id({
	  scrollSpeed: 900,
	  offset: 0
	});

    //gallery
	$('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
        
    });

    //попап услуги
    $(function () {
        $('.open-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        
        $(document).on('click', '.popup-modal-dismiss, .mfp-content', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

});