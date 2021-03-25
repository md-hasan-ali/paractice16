
// owl carousel
$(".banner-area").owlCarousel({
    loop: true,
    nav: false,
    items:1,
    margin:10,
    autoplay:true,
    smartSpeed:600,
});

//magnific popup js

$(document).ready(function() {
    $('.image-link').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });

    //counter up

    $('.counter').counterUp({
        time: 10000,
    });
});

// owl carousel

$(".testimonial-grid").owlCarousel({
    loop: true,
    nav: false,
    margin:20,
    autoplay:true,
    dot:true,
    smartSpeed:600,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:2
        }
    }
    
});

//Sticky menu

$(window).on('scroll', function(){
    if ($(this).scrollTop() > 20){
        $('.header-area').addClass("sticky");
    } else{
        $('.header-area').removeClass("sticky");
    }
});

//smooth Scroll

$('.menu ul li a, .mobile-menu a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
});
// wow js

new WOW().init();

//mobile menu

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
