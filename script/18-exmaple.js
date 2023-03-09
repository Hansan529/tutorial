$(".tab__title>li").click(function () {
  let onNum = $(this).index();
  $(this).addClass("active").siblings().removeClass("active");
  $(".tab__list>div").eq(onNum).addClass("on").siblings().removeClass("on");
});
