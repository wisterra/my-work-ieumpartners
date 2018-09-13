//---------------------------------------------------
// main
//---------------------------------------------------

    /* slider */
    $(function () {
        sliderActon();
    });

    function sliderActon() {
        var $slider = $('.visual-con');

        // slider option
        var slickOptions = {
            //lazyLoad: 'ondemand',
            dots: true,
            prevArrow: $('.slider-prev'),
            nextArrow: $('.slider-next')
        }
        $slider.slick(slickOptions);
    }