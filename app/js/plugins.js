$(function () {

    $('.projects__slider').slick({
        nextArrow: '<button class="Slider-arrow Right"><span>Международная компания Metso Outotec</span><img src="images/slider-next.svg" alt=""></button>',
        prevArrow: '<button class="Slider-arrow Left"><img src="images/slider-prev.svg" alt=""><span>Офис IT-компании в Санкт-Петербурге</span></button>',
    });

    new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".smallRight",
            prevEl: ".smallLeft",
        },
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
    });

    $('.message-form__checkbox, checkbox').styler();

    $('.menu__btn').on('click', () => {
        $('.mobile-menu').addClass('active');
    });

    $('.mobile-nav-button').on('click', () => {
        $('.mobile-menu').removeClass('active');
    });

    $('#checkDate1').on('change', function () {
        $('#btnSubmit1').prop("disabled", !this.checked);
    });

    $('#checkDate2').on('change', function () {
        $('#btnSubmit2').prop("disabled", !this.checked);
    });

    $('#checkDate3').on('change', function () {
        $('#btnSubmit3').prop("disabled", !this.checked);
    });

}); 