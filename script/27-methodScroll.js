$(".text__box").outerHeight();
$("button").on("click", function () {
  let textHeight = $(".text__box").outerHeight();
  // $(".text__wrap").scrollTop(textHeight);
  $(".text__wrap").stop().animate(
    {
      scrollTop: textHeight,
    },
    1000
  );
});
