$("#nav > li").on("click", function () {
  $(this)
    .children("a")
    .toggleClass("active")
    .parent()
    .siblings()
    .children("a")
    .removeClass("active");
  $(this).children(".sub").stop().slideToggle(300);
  $(this).siblings().children(".sub").stop().slideUp(300);
});
