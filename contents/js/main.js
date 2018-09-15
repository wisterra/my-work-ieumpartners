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

/* news ticker */
jQuery(function(){
	var $ = jQuery;
  jQuery('.btn').addClass('pointer').click(function () {
   var ih = $(this).index() == 0 ? -18 : 18; //위아래로 움직이는 px 숫자
   var obj = $('.recommend_list');
   obj.animate({ scrollTop:obj.scrollTop() + ih }, 100);
  });
});
jQuery(function(){
  function fn_article(container,btn, auto){}
});
fn_article3('notice5','bt5',true);

