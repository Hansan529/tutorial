let liWidth;
let wWidth;

let showBanner;
let showNum;

let liCount = $(".banner > li").length;

let first = $(".banner>li:lt(4)").clone();
$(".banner").append(first);

let copyCount = $(".banner > li").length;

let pWidth;

function init() {
  showBanner = 0;
  $(".banner").css({ marginLeft: 0 });
  wWidth = $(window).innerWidth();
  liWidth = $(".banner > li").outerWidth();
  if (wWidth >= 767) {
    showNum = 4;
  } else {
    showNum = 2;
  }
  pWidth = (copyCount * 100) / showNum;
  $(".banner").outerWidth(pWidth + "%");
  liWidth = $(".banner >li").outerWidth();
}
init();

function moveBanner() {
  $(".banner")
    .stop()
    .animate(
      {
        marginLeft: -showBanner * liWidth,
      },
      1000
    );
}

$(".right").on("click", () => {
  if (showBanner >= liCount) {
    showBanner = 0;
    $(".banner").css({
      marginLeft: 0,
    });
  }
  showBanner++;
  moveBanner();
});

$(window).on("resize", () => {
  init();
});
