/************************
    SLick-slider
*************************/
$(document).ready(function () {
    $(".work_slick").slick({
        infinite: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
    });
    
    $(".success_slick").slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 5,
        centerMode: true,
        focusOnSelect:true,
        centerPadding: '0px',
    });

});


/************************
    Toggle Navbar
*************************/
$(document).ready(function () {
    $("#menuBtn").click(function () {
        $("#menu").fadeIn(600).removeClass('hideMenu').addClass('showMenu');
        $("body").delay(100).queue(function (next) {
            $(this).addClass("oveHidden");
            next();
        })

    });

    $("#closeMenu").click(function () {
        $("#menu").fadeOut(600).removeClass('showMenu').addClass('hideMenu');
        $("body").removeClass("oveHidden", 600);
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $("#menu").fadeOut(600).removeClass('showMenu').addClass('hideMenu');
            $("body").removeClass("oveHidden", 600);
        }
    });

    $(window).ready(function () {
        $(".menu_links_wrap .sub_menu > .link").click(function () {
            $(this).parent('.sub_menu').toggleClass('showSub').siblings().removeClass('showSub');

            return false;
        });
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
    smooth-scroll
*************************/
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


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


/************************
    loader
*************************/
$(window).on('load', function () {
    $('.loader').fadeOut(400);
});



/************************
    AOS
*************************/
$(document).ready(function () {
    AOS.init({
        offset: 100,
        delay: 0,
        duration: 1400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
});
