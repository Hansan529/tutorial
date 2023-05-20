let moveTop;

function init() {
  let sHeight = $(window).height();
  $("section").outerHeight(sHeight);
}

init();

$(window).on("resize", init);

$("section").each(function (i) {
  $(this).on("mousewheel DOMMouseScroll", function (e) {
    let evt = e.originalEvent;
    let delta = 0;
    if (evt.detail) {
      delta = -evt.detail;
    } else {
      delta = evt.wheelDelta;
    }
    if (delta < 0) {
      if ($(this).next().length) {
        moveTop = $(this).next().offset().top;
      }
    } else {
      if ($(this).prev().length) {
        moveTop = $(this).prev().offset().top;
      }
    }

    $("html, body").stop().animate({ scrollTop: moveTop }, 500);
  });
});
