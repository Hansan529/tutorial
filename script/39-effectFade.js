$(".fadein").on("click", function () {
  $(".box1").fadeIn(1000);
});

$(".fadeout").on("click", function () {
  $(".box1").fadeOut(1000);
});

$(".fadetoggle").on("click", function () {
  $(".box1").fadeToggle(1000);
});

$(".fadeto").on("click", function () {
  $(".box2").fadeTo(1000, 0.5);
});
