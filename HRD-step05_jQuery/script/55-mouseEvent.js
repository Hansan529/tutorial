let over = 0;
let enter = 0;

$(".over").on("mouseover", function () {
  $(".count1").text(over++);
});

$(".enter").on("mouseenter", function () {
  $(".count2").text(enter++);
});
