let showBanner = 0;
let itemWidth = $(".list-1").outerWidth();

let liCount = $(".item__list > li").length;
console.log("liCount: ", liCount);

let obj = $(".item__list>li:lt(3)").clone();
$(".item__list").append(obj);

let copyCount = $(".item__list > li").length;
console.log("copyCount: ", copyCount);

function moveBanner() {
  $(".item__list")
    .stop()
    .animate(
      {
        marginLeft: -showBanner * itemWidth,
      },
      1000
    );
}

$(".right").on("click", () => {
  if (showBanner >= liCount) {
    showBanner = 0;
    $(".item__list").css({
      marginLeft: 0,
    });
  }
  showBanner++;
  moveBanner();
});

$(".left").on("click", () => {
  if (showBanner == 0) {
    showBanner = liCount;
    $(".item__list").css({ marginLeft: -itemWidth * liCount });
  }
  showBanner--;
  moveBanner();
});
