let bodyHeight = $("body").outerHeight();

$("button").on("click", () => {
  $("html, body").scrollTop(bodyHeight);
});
