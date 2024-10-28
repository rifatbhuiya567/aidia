(function ($) {
    "use strict";

    $(window).on('scroll', function () {
        let scrolling = $(this).scrollTop();
        
        if (scrolling > 50) {
            $('.main-header').addClass('fixed-header');
        } else {
            $('.main-header').removeClass('fixed-header');
        }

        if (scrolling > 200) {
            $('.btt').show(500);
        } else {
            $('.btt').hide(500);
        }
    });
    
    $('.searchbar-btn').on('click', function () {
        $('.searchbar').toggle(300);
    });

    $('.submenu-selector.one').on('mouseover', function () {
        $('.submenu-content.one').show(500);
        $('.submenu-content.two').hide(500);
    });

    $('.submenu-selector.two').on('mouseover', function () {
        $('.submenu-content.two').show(500);
        $('.submenu-content.one').hide(500);
    });

    $('.btt').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })

    const d = new Date();
    let year = d.getFullYear();
    $("#currentYear").html(year);
})(jQuery);