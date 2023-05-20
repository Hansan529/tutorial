let sNum = 0;

function fadeBanner() {
  $(".banner>Li").eq(sNum).fadeIn(1000).siblings().fadeOut(1000);
  $(".pager>li").eq(sNum).addClass("active").siblings().removeClass("active");
}

$(".pager>li").on("click", function () {
  sNum = $(this).index();
  fadeBanner();
});

let timer = setInterval(function () {
  if (sNum < 3) {
    sNum++;
  } else {
    sNum = 0;
  }
  fadeBanner();
}, 2000);

function overStop() {
  clearInterval(timer);
}
$(".banner>li").on("mouseover", overStop);
