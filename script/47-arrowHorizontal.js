let sNum = 0;
let liWidth = $(".banner > li").outerWidth();

$(".right").on("click", function () {
  sNum++;
  $(".banner")
    .stop()
    .animate(
      {
        marginLeft: -liWidth * sNum,
      },
      1000
    );
});
