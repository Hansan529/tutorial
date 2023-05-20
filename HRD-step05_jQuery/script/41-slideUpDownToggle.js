$(".up").on("click", function () {
  $(".box").slideUp(1000);
});
$(".down").on("click", function () {
  $(".box").slideDown(1000);
});
$(".toggle").on("click", function () {
  $(".box").slideToggle(1000);
});
