import Swiper from 'swiper';

function swipers() {
    const carousel = $('[data-carousel]'); //создаем карусель и находим ее по data-carousel

    carousel.each(function(i, el) { //настройки для всех слайдеров

        let obj = $(el), //объект с настройками для всех слайдеров
            type = obj.data('carousel'), // infinity и тд...
            container = $('[data-carousel-container]', obj),
            prev = $('[data-carousel-prev]', obj),
            next = $('[data-carousel-next]', obj),

            params = {
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                followFinger: false,
                loop: true,
            },

            paramsCustom = {};

        if (type =='infinity') {
            paramsCustom = {
                slidesPerView: 'auto',
                centeredSlides: true,
                breakpoints: {
                    375: {
                        spaceBetween: 4,
                    },
                    768: {
                        spaceBetween: 20,
                    },
                },
            };
        }

        params = $.extend(params, paramsCustom);

        let instance = new Swiper(container, params);
    });
}

export default swipers();