let mySwiper = new Swiper('.container',{
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    autoplay: true,
    slidesPerView: 'auto',
coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 100,
        modifier: 7
},
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
}
)
