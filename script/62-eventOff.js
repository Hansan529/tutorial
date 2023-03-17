$(".box").on("mouseover", (e) => {
  $(e.currentTarget).css({ background: "tomato" });
});
$("button").on("click", (e) => {
  $(".box").off("mouseover");
  $(".box").css({ background: "initial" });
});
