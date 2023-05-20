let section1 = $(".section1").outerHeight();
let section2 = $(".section2").outerHeight();
let section3 = $(".section3").outerHeight();

$("#nav>li").on("click", function () {
  // $(this).addClass("active").siblings().removeClass("active");
  let sNum = $(this).index();
  $("#nav>li").eq(sNum).addClass("active").siblings().removeClass("active");

  let yPos = $("#container > section").eq(sNum).offset().top;
  $("html, body").stop().animate(
    {
      scrollTop: yPos,
    },
    1000
  );
});

$(".top").on("click", function () {
  $("html, body").stop().animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
