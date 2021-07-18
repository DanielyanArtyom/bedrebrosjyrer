var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'coverflow',
    grabCursor: true,
    speed: 1000,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});