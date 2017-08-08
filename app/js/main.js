new WOW().init();
$('.header__container').addClass('fadeIn wow');
$('.header-logo').addClass('fadeIn wow');
$('.about__info').addClass('fadeIn wow');
$('.team__container').addClass('fadeIn wow');
$('.creative__images').addClass('fadeInRight wow');
$('.choose__container').addClass('fadeIn wow');
$('.services__info').addClass('fadeIn wow');
$('.services__item').addClass('fadeIn wow');
$('.client__info-container').addClass('fadeInLeft wow');
$('.client__comment-ap').addClass('fadeInRight wow');
$('.footer__social').addClass('fadeIn wow');

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });

    });
});



