//---------------------------------------------------
// main
//---------------------------------------------------

/* slider */
$(function () {
    sliderActon();
});

function sliderActon() {
    var $slider = $('.visual-con');
    var $sliderBanner = $('.banner-con');

    // slider option
    var slickOptions = {
        //lazyLoad: 'ondemand',
        dots: true,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next')
    }
    $slider.slick(slickOptions);
    $sliderBanner.slick({
        dots: true
    });
}

