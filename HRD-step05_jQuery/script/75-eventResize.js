let wWidth = $(window).outerWidth();
let iWidth = $(window).innerWidth();

$(".text").text(wWidth);
$(".itext").text(iWidth);

$(window).on("resize", () => {
  wWidth = $(window).outerWidth();
  iWidth = $(window).innerWidth();
  $(".text").text(wWidth);
  $(".itext").text(iWidth);
});
