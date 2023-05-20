$("html, body").on("mousewheel DOMMouseScroll", function (e) {
  let delta = 0;
  let event = e.originalEvent;
  if (event.detail) {
    delta = -event.detail;
  } else {
    delta = event.wheelDelta;
  }
});
