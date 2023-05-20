$("button:eq(0)").click(() => {
  $("h1").addClass("bg");
});
$("button:eq(1)").click(() => {
  $("h1").removeClass("bg");
});
$("button:eq(2)").click(() => {
  $("h1").toggleClass("bg");
});
