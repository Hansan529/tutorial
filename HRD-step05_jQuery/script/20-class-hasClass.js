$(function () {
  //.toggle을 클릭하면 .bg 클래스가 추가/제거 가 번갈아서 되도록
  $(".toggle").click(function () {
    $(this).toggleClass("bg");
  });

  //.has 을 클릭하면 .has 가 .bg라는 클래스를 가지고 있으면 제거하고,
  //없으면 추가하고
  $(".has").click(function () {
    if ($(this).hasClass("bg")) {
      $(this).removeClass("bg");
    } else {
      $(this).addClass("bg");
    }
  });
});
