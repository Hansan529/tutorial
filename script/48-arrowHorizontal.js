let sNum = 0;
let liWidth = $(".banner > li").outerWidth();

console.log(liWidth);

function moveBanner() {
  $(".banner")
    .stop()
    .animate(
      {
        marginLeft: -sNum * liWidth,
      },
      1000
    );

  $(".pager>li").eq(sNum).addClass("active").siblings().removeClass("active");
}
$(".pager>li").on("click", function () {
  sNum = $(this).index();
  moveBanner();
});
