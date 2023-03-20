let bannerNum = 0;
let bannerList = $(".banner > li").length;

$(".count").text(bannerNum + 1);
$(".total").text(bannerList);

let bannerWidth = $(".banner>li").width();

let cloneObj = $(".banner>li").first().clone();

$(".banner").append(cloneObj);
$(".banner").width(bannerList * bannerWidth);

function moveBanner() {
  $(".banner")
    .stop()
    .animate({ marginLeft: -bannerNum * bannerWidth }, 1000);
  if (bannerNum == bannerList) {
    $(".count").text(1);
  } else {
    $(".count").text(bannerNum + 1);
  }
}

$(".next").on("click", () => {
  if (bannerNum >= bannerList) {
    bannerNum = 0;
    $(".banner").css("margin-left", 0);
  }
  bannerNum++;
  moveBanner();
});
$(".prev").on("click", () => {
  if (bannerNum == 0) {
    bannerNum = 8;
    $(".banner").css({ marginLeft: -bannerNum * bannerWidth });
    moveBanner();
  }
  bannerNum--;
  moveBanner();
});

// banner start, stop
let autoBoolean = true;
let auto = setInterval(autoPlay, 2000);

function autoPlay() {
  $(".next").trigger("click");
}

$(".auto").on("click", (e) => {
  let target = $(e.currentTarget).find("img");

  if (autoBoolean == true) {
    target.attr({
      src: "https://via.placeholder.com/30/ffffff/000000.jpg?text=start",
    });
    autoBoolean = false;
    clearInterval(auto);
  } else {
    target.attr({
      src: "https://via.placeholder.com/30/ffffff/000000.jpg?text=stop",
    });
    autoBoolean = true;
    auto = setInterval(autoPlay, 2000);
  }
});
