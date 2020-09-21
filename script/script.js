
/* 마우스 hover 일 때 GNB 메뉴 CSS 적용 시작 */
$("#header #mainMenu>li").mouseover(function(){

    // hover 적용되면 GNB 메뉴의 모든 li요소의 테두리를
    // 회색적용 및 a요소의 글자색상 회색, 배경색상 흰색 적용
    $("#header #mainMenu>li").css({
        "border": "1px solid #d9d9d9"
    }).children("a").css({
        "color": "#888",
        "background-color": "#fff"
    });

    // hover가 적용된 대상에 대하여 녹색 좌우 테두리선과
    // 하위 요소 a의 글자색상 및 배경 녹색 적용
    $(this).css({
        "border-left-color": "#16a840",
        "border-right-color": "#16a840"
    }).children("a").css({
        "color": "#fff",
        "background-color": "#16a840"
    });

});
/* 마우스 hover 일 때 GNB 메뉴 CSS 적용 끝 */


/* GNB 메뉴 포커스 설정 작업 시작 */
$("#header #mainMenu>li>a").focusin(function(){

    // 포커스가 설정되면 모든 li요소와 a요소를
    // 배경색과 글자색상, 좌우 테두리선에 적용된
    // 스타일을 초기상태로 만듬
    $("#header #mainMenu>li").css({
        "border": "1px solid #d9d9d9"
    }).children("a").css({
        "color": "#888",
        "background-color": "#fff"
    });

    // 포커스가 설정된 대상에 대하여 스타일 적용
    // 글자색상 흰색, 배경색상 녹색, 좌우 테두리선 녹색적용
    $(this).css({
        "color": "#fff",
        "background-color": "#16a840"
    }).parent("li").css({
        "border-left-color": "#16a840",
        "border-right-color": "#16a840"
    });
});
/* GNB 메뉴 포커스 설정 작업 끝 */

//$("#header #mainMenu>li>a").focusout(function(){
//
//
//    $("#header #mainMenu>li").css({
//        "border": "1px solid #d9d9d9"
//    }).children("a").css({
//        "color": "#888",
//        "background-color": "#fff"
//    });
//
//    $(this).parent("li").css({
//        "border-left-color": "#d9d9d9",
//        "border-right-color": "#d9d9d9"
//    });
//});


/* GNB 서브 메뉴 슬라이드 시작 */
$("#header #mainMenu>li").mouseover(function(){
    $(this).children("ul").stop().slideDown();
});
$("#header #mainMenu>li").mouseout(function(){
    $(this).children("ul").stop().slideUp();
});
/* GNB 서브 메뉴 슬라이드 끝 */


/* 슬라이드 쇼 시작 */
var intervalRef = setInterval(fnSlide, 5000);
  // setInterval(함수명, duration);
  // duration에 적용된 시간마다 기재된 함수가 실행됨
  // intervalRef => interval reference, 인터벌 참조

function fnSlide() {
    var tagFirst = "#slideShuttleFrame>div:first-child";
    var tagLast = "#slideShuttleFrame>div:last-child";
    $(tagFirst).clone().insertAfter(tagLast);
    // .clone() 메서드는 선택자의 요소를 복사한다.
    // .clone() 메서드는 .insertBefore(), prependTo(),
    //           .appendTo(), .insertAfter()와 함께 사용된다.
    $("#slideshow>#slideShuttleFrame").animate(
        { "margin-left" : "-300px" },
        2000,
        "swing",
        function() {
            $(tagFirst).remove();
            // animate()가 종료되면 변수 tagFirst에 저장된
            // 요소가 삭제된다.
            $(this).css({ "margin-left" : "0px" });
            // this 키워드는 this가 종속되어 있는 메서드의
            // 선택자를 의미하므로 여기서 this는 아래와 같다.
            // $("#slideshow>#slideShuttleFrame")

        }
    );
}
// animate(1, 2, 3, 4);
// 1. CSS   2. duration(적용시간)  3. swing/linear
// 4. callback


  /* 방향 설정(화살표를 이용한 수동 슬라이드) 적용 시작 */
$("#slideArea .arrowSign").mouseover(function(){
    clearInterval(intervalRef);
});
$("#slideArea .arrowSign").mouseout(function(){
    intervalRef = setInterval(fnSlide, 2000);
});
  /* 방향 설정(화살표를 이용한 수동 슬라이드) 적용 끝 */


    /* 슬라이드쇼 이전 버튼 클릭 시작 */
$("div#prevArrow button").click(function(){
    alert("prevOK!!");
});
    /* 슬라이드쇼 이전 버튼 클릭 끝 */


    /* 슬라이드쇼 다음 버튼 클릭 시작 */
$("div#nextArrow button").click(function(){
    fnSlide();  // 버그 테스트 - 중첩 이슈
});
    /* 슬라이드쇼 다음 버튼 클릭 끝 */

/* 슬라이드 쇼 끝 */



/* main#main #bbsHeader 시작 */
$("#main #bbsHeader h2").click(function(){
    // 작업순서1. 모든 관련내용 삭제
    // 작업순서2. 클릭한 대상에 관련내용 적용
    $("#main #bbsHeader h2").removeClass("selected");
    $(this).addClass("selected");

    $("#main #bbsHeader h2 i").removeClass("far fa-check-circle");
    $(this).children("i").addClass("far fa-check-circle");

    $("#main #bbsHeader h2 i").removeAttr("style");
    $(this).children("i").attr("style", "font-size:26px;color:#e13d2b");

    // 아래 내용만 반대로 적용함.
    // 1. 모든 불릿기호 적용후
    // 2. 클릭한 대상에 불릿기호 삭제
    $("#main #bbsHeader h2 span").text("ㆍ");
    $(this).children("span").text("");


});
/* main#main #bbsHeader 끝 */










