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
    
    // Searchbar
    $('.searchbar-btn').on('click', function () {
        $('.searchbar').toggle(300);
    });
    
    $('.mobile-searchbar').on('click', function () {
        $('.searchbar').toggle(300);
        $('.mobile-menu-items').hide(500);
        $('.mobile-searchbar').toggleClass('active');
        $('.mobile-menubar').removeClass('active');
        $('.main-header').addClass('active-mobile-menu');
    });

    // Sub Menu Selector for Desktop
    $('.submenu-selector.one').on('mouseover', function () {
        $('.submenu-content.one').show(500);
        $('.submenu-selector.one').addClass('active');
        $('.submenu-content.two').hide(500);
        $('.submenu-selector.two').removeClass('active');
    });

    $('.submenu-selector.two').on('mouseover', function () {
        $('.submenu-content.two').show(500);
        $('.submenu-selector.two').addClass('active');
        $('.submenu-content.one').hide(500);
        $('.submenu-selector.one').removeClass('active');
    });

    // Mobile Menubar
    $('.mobile-menubar').on('click', function () {
        $('.mobile-menu-items').toggle(500);
        $('.searchbar').hide(300);
        $('.mobile-menubar').toggleClass('active');
        $('.mobile-searchbar').removeClass('active');
        $('.main-header').addClass('active-mobile-menu');
    });

    // Menu Dropdown for Mobile
    $('.mobile-dropdown-btn.one').on('click', function () {
        $('.mobile-dropdown-chld.one').toggle(500);
        $('.mobile-dropdown-btn.one').toggleClass('active');
    });

    $('.mobile-dropdown-btn.two').on('click', function () {
        $('.mobile-dropdown-chld.two').toggle(500);
        $('.mobile-dropdown-btn.two').toggleClass('active');
    });

    $('.mobile-dropdown-btn.three').on('click', function () {
        $('.mobile-dropdown-chld.three').toggle(500);
        $('.mobile-dropdown-btn.there').toggleClass('active');
    });

    $('.mobile-dropdown-btn.four').on('click', function () {
        $('.mobile-dropdown-chld.four').toggle(500);
        $('.mobile-dropdown-btn.four').toggleClass('active');
    });

    $('.mobile-dropdown-btn.five').on('click', function () {
        $('.mobile-dropdown-chld.five').toggle(500);
        $('.mobile-dropdown-btn.five').toggleClass('active');
    });

    $('.mobile-dropdown-btn.six').on('click', function () {
        $('.mobile-dropdown-chld.six').toggle(500);
        $('.mobile-dropdown-btn.six').toggleClass('active');
    });

    // Sub Menu Selector for Mobile
    $('.mobile-submenu-selector.one').on('click', function () {
        $('.mobile-submenu.one').toggle(500);
        $('.mobile-submenu-selector.one').toggleClass('active');
    });

    $('.mobile-submenu-selector.two').on('click', function () {
        $('.mobile-submenu.two').toggle(500);
        $('.mobile-submenu-selector.two').toggleClass('active');
    });

    // Back to Top
    $('.btt').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Get Year
    const d = new Date();
    let year = d.getFullYear();
    $("#currentYear").html(year);
})(jQuery);