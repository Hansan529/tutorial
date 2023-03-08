$(".link").css("display", "block");

$(".remove").click(() => {
  $("a[target]").removeAttr("target");
});
$(".add").click(() => {
  $(".link").attr({ target: "_blank" });
});
