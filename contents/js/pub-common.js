//---------------------------------------------------
// [pub-common.js]
// 자주쓰는 function 관리
//---------------------------------------------------
// [function list]
// deviceCheck -- device, deviceOS체크
// goPosition(to) -- to: 목표selector나 고정위치
// openPop, closePop
// placeholder
//---------------------------------------------------

var device = getDeviceName();
var deviceOs = getMobileKind();
var scrollTop = $(window).scrollTop();
//var popState = false;
//var placeholderList = false; // array || false
//var directInput = false; // true || false

// function initEventC() {
//     if (placeholderList) placeholder(placeholderList);
//     if (directInput) directInput;
// }

// $(document).ready(function () {
//     //initEventC();
//     //loading();
//     controlNavi();
// });

//---------------------------------------------------
// mobile navi
//---------------------------------------------------
var mNaviToggle = true;
function controlMobileNavi() {
    
    function openNavi() {
        $('body').addClass('html-fix');
        $('.header-mobile').addClass('active');
        $('.header-mobile-dimmed').addClass('active');
        $('.header-mobile').addClass('active');
        $('.nav-toggle-m').addClass('active');
        $('.header-mobile-roll').css('height', '270px');
    }

    function closeNavi() {
        resetDepth();        
        $('body').removeClass('html-fix');
        $('.header-mobile').removeClass('active');
        $('.header-mobile-dimmed').removeClass('active');
        $('.header-mobile').removeClass('active');
        $('.nav-toggle-m').removeClass('active');
        $('.header-mobile-roll').css('height', '0');
    }

    // 열린 뎁스 리셋
    function resetDepth() {
        $('.m-menu-depth1').removeClass('active');
        $('.m-menu-depth2').removeClass('active');
    }

    // 햄버거 클릭시
    $('.nav-toggle-m').click(function () {
        if (mNaviToggle == true) {
            openNavi();
        } else {
            closeNavi();
        }
        mNaviToggle = !mNaviToggle;
    });

    // 내비딤드 클릭시
    $('.header-mobile-dimmed').click(function () {
        closeNavi();
    });

    // 메뉴들 클릭시
    $('.m-menu-depth1').click(function (e) {
        e.preventDefault;
        $this = $(this);
        resetDepth();
        if ($this.hasClass('active')) {
            $this.removeClass('active');
            $this.find('.m-menu-depth2').removeClass('active');
        } else {
            $this.addClass('active');
            $this.find('.m-menu-depth2').addClass('active');
            $('.header-mobile-roll').css('height', 'auto');
        }
    });

}

//---------------------------------------------------
// lnb control
//---------------------------------------------------
var mLnbToggle = true;
function controlMobileLnb(){
    $('.lnb-selected').click(function () {
        if (mLnbToggle == true) {
            $('.lnb-con').addClass('active');
        } else {
            $('.lnb-con').removeClass('active');
        }
        mLnbToggle = !mLnbToggle;
    });    
}
//---------------------------------------------------
// 위치로 이동
// to : number, string(targetArea)
//---------------------------------------------------
function goPosition(to) {
    scrollReady = false;
    var tg = String(to);
    if (tg.indexOf('#') != -1) {
        var tg = $(tg).offset().top;
    }
    $("html, body").stop().animate({
            scrollTop: tg
        },
        500,
        function () {
            scrollReady = true;
        }
    );
}

//---------------------------------------------------
// 레이어팝업 여닫기 기능
// openPop / closePop

// 공통 기능 외에 단발성 내용은 Etc function에 추가
// openPopEtc / closePopEtc
//---------------------------------------------------
function openPop(flag, dimmedBoolean) {
    popState = !popState;
    var scrollTop = $(window).scrollTop();
    var $selector = $('#pop-' + flag);
    var dim = dimmedBoolean; // 생략이 기본, false일 경우 dim을 사용하지 않는다
    if (dimmedBoolean != false) $("#dimmed").show();
    $selector.css('top', scrollTop + 'px').show().focus();
    // 영상팝업일 경우
    if (flag == 'mov-view') {
        if (!popAutoPlayMode) popP.playVideo();
        $('.popup .btn-right').hide();
    }
};

function closePop(flag, dimmedBoolean) {
    popState = !popState;
    var dim = dimmedBoolean; // 생략이 기본, false일 경우 dim을 사용하지 않는다
    if (dimmedBoolean != false) $("#dimmed").hide();
    $('#pop-' + flag).hide();
    // 영상팝업일 경우
    if (flag == 'mov-view') {
        popP.stopVideo();
    }
};