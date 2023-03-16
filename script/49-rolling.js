let sNum = 0;

let obj = $(".banner>.b1").clone();
$(".banner").append(obj);

let liCount = $(".banner>li").length;

$(".banner").outerWidth(liCount * 100 + "%");
$(".banner>li").width(100 / liCount + "%");

let liWidth = $(".banner > li").outerWidth();

function moveBanner() {
  $(".banner")
    .stop()
    .animate({
      marginLeft: -sNum * liWidth,
    });
  if (sNum == 4) {
    console.log("4가 됨");
    $(".pager>li").eq(0).addClass("active").siblings().removeClass("active");
    sNum = 0;
  } else {
    $(".pager>li").eq(sNum).addClass("active").siblings().removeClass("active");
  }
}

$(".right").on("click", function () {
  if (sNum == 4) {
    $(".banner").css("margin-left", 0);
    sNum = 0;
  }
  sNum++;
  moveBanner();
});

$(".left").on("click", function () {
  if (sNum == 0) {
    $(".banner").css("margin-left", -4 * liWidth);
    sNum = 4;
  }
  sNum--;
  moveBanner();
});

$(".pager>li").on("click", function () {
  sNum = $(this).index();
  moveBanner();
});
