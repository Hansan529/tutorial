let centerBanner = 0;
let liWidth = $(".banner>.b1").outerWidth();
let liCount = $(".banner>li").length;

let first = $(".banner>li:lt(2)").clone();
let last = $(".banner > li").last().clone();
$(".banner").append(first);
$(".banner").prepend(last);

let copyCount = $(".banner>li").length;

let bWidth = (copyCount * 100) / 2 + "%";
$(".banner").outerWidth(bWidth);

$(".banner>li:eq(1)").addClass("active").find(".textBox").css("opacity", 1);

function moveBanner() {
  $(".banner")
    .stop()
    .animate({ marginLeft: -centerBanner * liWidth }, 1000);
  $(".banner>li")
    .eq(centerBanner + 1)
    .addClass("active")
    .siblings()
    .removeClass("active");
  $(".banner>li").find(".textBox").stop().animate({ opacity: 0 }, 1000);
  $(".banner>li")
    .eq(centerBanner + 1)
    .find(".textBox")
    .stop()
    .animate({ opacity: 1 }, 1000);
}
$(".right").on("click", function () {
  if (centerBanner >= liCount) {
    $(".banner").css({ marginLeft: 0 });
    centerBanner = 0;
  }
  centerBanner++;
  moveBanner();
});
$(".left").on("click", function () {
  if (centerBanner == 0) {
    centerBanner = liCount;
    $(".banner").css({ marginLeft: -liCount * liWidth });
  }
  centerBanner--;
  moveBanner();
});
