$(".pager > li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  let bannerNum = $(this).index();
  $(".banner > li").eq(bannerNum).show().siblings().hide();
});
