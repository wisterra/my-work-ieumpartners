//---------------------------------------------------
// main
//---------------------------------------------------

/* slider */
$(function () {
    sliderActon();
});


function sliderActon() {
    var $sliderMain = $('.visual-con');
    var $sliderBanner = $('.banner-con');
    var $sliderNotice = $('#sliderNotice');

    // slider option
    var slickMainOptions = {
        //lazyLoad: 'ondemand',
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next')
    }
    $sliderMain.slick(slickMainOptions);
    $sliderBanner.slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $sliderNotice.slick({
        vertical:true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.notice-prev'),
        nextArrow: $('.notice-next'),
        swipe:false
    });    
}

