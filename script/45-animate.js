$("button:eq(0)").on("click", function () {
  $("div").animate(
    {
      marginLeft: "90%",
    },
    5000
  );
});

$("button:eq(1)").on("click", function () {
  $(".box1").stop();
});
$("button:eq(2)").on("click", function () {
  $(".box2").finish();
});
$("button:eq(3)").on("click", function () {
  $(".box3").delay(1000);
});
