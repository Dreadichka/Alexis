$(document).ready(function(){

    let header = $("#header");
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let playBtn = $("#video__button");
    let modalClose = $("#modal-close");
    let body = $("body");
    let modal = $("#modal");

    /* Fixed Header */

    checkScroll(scrollPos);

    $(window).on("scroll resize", function(){
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos);
    });

    function checkScroll(scrollPos){
        if(scrollPos > 0){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }

    /* Nav Toggle */

    navToggle.on("click", function(e){
        e.preventDefault();

        nav.toggleClass("active");
    });

    /* Tabs */

//    $(".teammate__about").not(":first").hide();
//    $(".team__item").on("click", function(){
//       $(".team__item").removeClass("active").eq($(this).index()).addClass("active");
//       $(".teammate__about").hide().eq($(this).index()).fadeIn()
//    }).eq(0).addClass("active");

    /* Slider https://owlcarousel2.github.io/OwlCarousel2/ */

    $("#owl-carousel").owlCarousel({
        items: 1, /*Slides*/
        loop: false, /*Infiniti In One Screen*/
        nav: false,
        dots: true,
    });

    /* Smooth Scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 30
        }, 700);
    });

});
