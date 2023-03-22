function banner1After() {
  $(".banner3").stop().fadeTo(2000, 1);
}
function banner2After() {
  $(".banner1").stop().fadeTo(2500, 1, banner1After);
}
function scroll() {
  let posY = $(this).scrollTop();

  if (posY > 250) {
    $(".dunkin .textWrap").stop().animate(
      {
        right: 300,
        opacity: 1,
      },
      500
    );
    $(".dunkin .imgWrap").stop().animate(
      {
        left: 250,
        opacity: 1,
      },
      500
    );
  }
  if (posY > 400) {
    $(".subway .textWrap").stop().animate(
      {
        right: 500,
        opacity: 1,
      },
      500
    );
    $(".subway .imgWrap").stop().animate(
      {
        left: 500,
        opacity: 1,
      },
      500
    );
  }
}

$(".banner2").stop().fadeTo(2000, 1, banner2After);

$(window).on("scroll", scroll);
