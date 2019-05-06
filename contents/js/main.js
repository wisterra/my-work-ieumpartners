//---------------------------------------------------
// main
//---------------------------------------------------

/* slider */
$(function () {
    sliderActon();
});


function sliderActon() {
    var $sliderMain = $('.main-visual-inner');
    var $sliderBanner = $('.main-banner-con');
    var $sliderNotice = $('.main-notice-slider');

    // slider option
    var slickMainOptions = {
        //lazyLoad: 'ondemand',
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.main-visual-paging-prev'),
        nextArrow: $('.main-visual-paging-next')
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
        prevArrow: $('.main-notice-paging-prev'),
        nextArrow: $('.main-notice-paging-next'),
        swipe:false
    });  
}

