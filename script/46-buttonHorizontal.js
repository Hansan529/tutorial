let sNum = 0;

$(".pager > li").on("click", function () {
  sNum = $(this).index();
  $(".pager>li").eq(sNum).addClass("active").siblings().removeClass("active");
  $(".banner")
    .stop()
    .animate({
      marginLeft: -100 * sNum + "%",
    });
});
