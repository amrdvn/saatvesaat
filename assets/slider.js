var swiper68 = new Swiper('#swiper-widget-68', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 300,
    effect: 'slide',
    autoplay: 3000,
    pagination: '.swiper-pagination-widget-mnm-widgetseventynine-68',
    paginationClickable: true,
    nextButton: '#widget-mnm-widgetseventynine-68-swiper-button-next',
    prevButton: '#widget-mnm-widgetseventynine-68-swiper-button-prev',
    spaceBetween: 28,
    onSlideChangeEnd: function () {
        $j(window).trigger('scroll');
        $j(document).trigger('swiperScroll');
    }
});