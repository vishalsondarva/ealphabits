/************************
    SLick-slider
*************************/
$(document).ready(function () {
    $(".work_slick").slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    swipe: false,
                },
            },
        ],
    });

    $(".success_slick").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        slidesToShow: 5,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    });

});


/************************
    Toggle Navbar
*************************/
$(document).ready(function () {
    $("#menuBtn").click(function () {
        $('#menuBtn .cross ').toggleClass('open')
        $('body').toggleClass('oveHidden', 400);
        $("#menu").slideToggle(400);
        $('.sub_menu').removeClass('showSub');
    });

    $("#menu .sub_menu > .link").click(function () {
        $(this).parent('.sub_menu').toggleClass('showSub').siblings().removeClass('showSub');

        return false;
    });
});


/************************
    Scroll to fixed Navbar
*************************/
if ($(window).innerWidth() <= 991) {
    $(window).scroll(function () {
        var sticky = $('.header, .body_wrap'),
            scroll = $(window).scrollTop();

        if (scroll >= 40) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
} else {
    $(window).scroll(function () {
        var sticky = $('.header, .body_wrap'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
}


/************************
    magnificPopup-img
*************************/
$(document).ready(function () {
    if ($(".gallery_container_page, .info_imgView, .video_popup, .info_imgView_one")[0]) {
        $('.gallery_container_page').magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        });

        $('.info_imgView').magnificPopup({
            // delegate: 'a',
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        });

        $('.info_imgView_one').magnificPopup({
            // delegate: 'a',
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            gallery: {
                enabled: false
            }
        });

        $('.video_popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        });
    }
});


/************************
    Typing Letter
*************************/
$(document).ready(function () {
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<label class="wrap">' + this.txt + '</label>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 600;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typing');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typing > .wrap { border-right: 8px solid #d16e51}";
        document.body.appendChild(css);
    };
});


/************************
    loader
*************************/
$(window).on('load', function () {
    $('.loader_wrap').fadeOut(400);
});


/************************
    Swiper
*************************/
$(document).ready(function () {
    var swiper = new Swiper(".slider_wrap", {
        loop: true,
        effect: "coverflow",
        spaceBetween: 0,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        slideToClickedSlide: true,
        autoplay: {
            delay: 3000,
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true
        },
        breakpoints: {
            '360': {
                slidesPerView: 2,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true
                },
            },
            '400': {
                slidesPerView: 2,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true
                },
            },
            '500': {
                slidesPerView: 3,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true
                },
            },
            '767': {
                slidesPerView: 3,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true
                },
            }
        },
        pagination: {
            el: ".swiper-pagination"
        }
    });
});



/************************
    AOS
*************************/
$(document).ready(function () {
    AOS.init({
        offset: 80,
        delay: 100,
        duration: 1200,
        easing: 'ease',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
});

