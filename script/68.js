let slideLeft = 0;
let centerBanner = 2;
let liCount = $(".slide-list>li").length;
let liWidth = $(".slide-list>li").outerWidth();

let first = $(".slide-list>li:lt(5)").clone();
$(".slide-list").append(first);

let copyCount = $(".slide-list>li").length;

let pWidth = (100 * copyCount) / 5;
$(".slide-list").outerWidth(pWidth + "%");

function init() {
  $(".slide-list>li").eq(centerBanner).find(".center").show();
  $(".slide-list>li").eq(centerBanner).find(".text-box>div").show();
}
init();

function moveBanner() {
  $(".slide-list>li").find(".center").hide();
  $(".slide-list>li").find(".text-box>div").hide();
  $(".slide-list")
    .stop()
    .animate(
      {
        marginLeft: -liWidth * slideLeft,
      },
      700,
      () => {
        $(".slide-list>li").eq(centerBanner).find(".center").stop().fadeIn(700);
        $(".slide-list>li")
          .eq(centerBanner)
          .find(".text-box>div")
          .stop()
          .fadeIn(700);
      }
    );
}

$(".right-arrow").on("click", function () {
  if (slideLeft >= liCount) {
    slideLeft = 0;
    centerBanner = 2;
    $(".slide-list").css({ marginLeft: -centerBanner * liWidth });
  }
  slideLeft++;
  centerBanner++;
  moveBanner();
});
$(".left-arrow").on("click", function () {
  if (slideLeft == 0) {
    slideLeft = liCount;
    centerBanner = liCount + 2;
    $(".slide-list").css({ marginLeft: -liCount * liWidth });
  }
  slideLeft--;
  centerBanner--;
  moveBanner();
});

let autoPlay = setInterval(function () {
  $(".right-arrow").trigger("click");
}, 2000);

$(".best-seller").on("mouseenter", function () {
  clearInterval(autoPlay);
});
$(".best-seller").on("mouseleave", function () {
  autoPlay = setInterval(function () {
    $(".right-arrow").trigger("click");
  }, 2000);
});
