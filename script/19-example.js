$("#menu > li > a").click(function () {
  $(this).parent().toggleClass("active").siblings().removeClass("active");
});
