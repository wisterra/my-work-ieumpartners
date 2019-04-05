//---------------------------------------------------
// main
//---------------------------------------------------

/* slider */
$(function () {
    sliderActon();
});


function sliderActon() {
    var $sliderMain = $('.main-visual-inner');
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
    // 메인비쥬얼
    $sliderMain.slick(slickMainOptions);
    // 이벤트배너
    $sliderBanner.slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    // 공지사항
    $sliderNotice.slick({
        vertical:true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.notice-prev'),
        nextArrow: $('.notice-next'),
        swipe:false
    });    
}

