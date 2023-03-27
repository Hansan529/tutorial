let showBanner = 0;

let delta;

let ani = $(".banner").is(":animated");
console.log("ani: ", ani);

$("html, body").on("mousewheel DOMMouseScroll", (e) => {
  if (!ani) {
    ani = true;
    let evt = e.originalEvent;
    if (evt.delta) {
      delta = -evt.detail;
    } else {
      delta = evt.wheelDelta;
    }
    if (delta < 0 && showBanner < 2) {
      showBanner++;
    } else if (delta > 0 && showBanner > 0) {
      showBanner--;
    }

    $(".banner")
      .stop()
      .animate(
        {
          marginLeft: -showBanner * 100 + "%",
        },
        1000,
        () => {
          ani = false;
        }
      );
  }
});
