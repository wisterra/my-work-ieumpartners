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

$(document).ready(function () {
    //initEventC();
    //loading();
});

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
    $("html, body").stop().animate(
        { scrollTop: tg },
        500,
        function () { scrollReady = true; }
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
