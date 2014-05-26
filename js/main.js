$(document).ready(function() {

    $('.b-leads__slider').bxSlider({
        minSlides: 2,
        mode: 'vertical',
        slideMargin: 80,
        pager: false,
        nextText: 'Еще рынки',
        prevText: 'Еще рынки'
    }); 

    /* Форма заказа
    ------------------------------------------------------- */

    $('.b-order-form form').submit(function(e) {

        $this = $(this);

        $.fancybox('<div class="b-order-form__message">Спасибо, Ваша сообщение отправлено!</div>', {
            padding: 0
        });

        return false;

        $.post('contacts.php', $this.serialize(), function(response) {

            if (response.error) {

                alert(response.error);

            } else {

                $.fancybox('<div class="b-order-form__message">Спасибо, Ваша сообщение отправлено!</div>', {
                    padding: 0
                });
                
            }

    }, 'json');

        e.preventDefault();
    });

    $.ionSound({
        sounds: [
            "record8"
        ],
        path: "sounds/",
        multiPlay: false,
        volume: "0.5"
    });

    $('[data-sound]').click(function(e) {

        $.ionSound.play($(this).data('sound'));
        e.preventDefault();

    });

    /*$('.b-leads .bx-next').click(function() {

        $('html, body').animate({
            scrollTop: $('.b-leads .bx-prev').offset().top
        }, 800);

    });*/

});