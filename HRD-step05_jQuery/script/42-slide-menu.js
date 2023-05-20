$("#nav").on("mouseover", function () {
  $(".sub").stop().slideDown(300);
  $(".subBg").stop().slideDown(300);
});

$("#nav").on("mouseout", function () {
  $(".sub").stop().slideUp(300);
  $(".subBg").stop().slideUp(300);
});
