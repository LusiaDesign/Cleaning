$(function () {
    var timer;
    $(document).ready(resize);

    $(window).resize(function () {
        clearInterval(timer);
        timer = setTimeout(resize, 200);
    });

    function resize() {
        console.log("r");
        if ($(window).width() > 768) {
            $('.nav__menu').removeClass('active');
            $('body').removeClass('no-scroll');
        }
    }

    $('.menu-btn').on('click', function () {
        $('.nav__menu').addClass('active');
        $('body').addClass('no-scroll');
    });

    $('.menu__link').on('click', function () {
        $('.nav__menu').removeClass('active');
        $('body').removeClass('no-scroll');
    });

    $('.nav__close-btn').on('click', function () {
        $('.nav__menu').removeClass('active');
        $('body').removeClass('no-scroll');
    });

    $('.prise__buttons').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.prise__wrap',
        focusOnSelect: true,
        //autoplay: true,
        // speed: 1000,
        infinite: true
    });
    $('.prise__wrap').slick({
        arrows: false,
        asNavFor: '.prise__buttons',
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        //speed: 1000,
    });
});