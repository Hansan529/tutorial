$(".list3").next().css("color", "red");
$(".list3").nextAll().css("border", "1px solid");
$(".list3").nextUntil(".list6").css("backgroundColor", "yellow");

$(".menu6").prev().css({ color: "hotpink" });
$(".menu6").prevAll().css({ background: "#ddd" });
$(".menu6").prevUntil(".menu3").css({ border: "1px solid" });

$(".si3").siblings().css({
  fontSize: "30px",
  color: "green",
});
