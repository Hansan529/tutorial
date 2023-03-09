$("#tab__wrap").css({
  width: "500px",
  margin: "50px auto",
  bakcgroundColor: "antiquewhite",
});
$(".tab__btn").css({
  display: "flex",
});
$(".tab__btn>li>a").css({
  display: "block",
  background: "#ccc",
  padding: "10px 20px",
});
$(".tab__btn>li.active>a").css({
  background: "white",
  border: "1px solid #333",
  borderBottom: "none",
});
$(".tab__list").css({
  position: "relative",
});

$(".tab__btn>li").click(function (e) {
  let selectNum = $(this).index();
  $(this).addClass("active").siblings().removeClass("active");
  $(".tab__list>div").eq(selectNum).addClass("on").siblings().removeClass("on");
});
