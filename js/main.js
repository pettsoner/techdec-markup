$(document).ready(function() {

    $('.b-leads__slider').bxSlider({
        minSlides: 2,
        mode: 'vertical',
        slideMargin: 80,
        pager: false,
        nextText: 'Еще рынки',
        prevText: 'Еще рынки'
    }); 

    $('.b-leads .bx-next').click(function() {

        $('html, body').animate({
            scrollTop: $('.b-leads .bx-prev').offset().top
        }, 800);

    });

});