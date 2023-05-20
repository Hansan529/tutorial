$("pre").css({ color: "black" });
$("div").css({ color: "black" });
$("ul>li").css({ listStyle: "none" });

$(".child").parent().css({ backgroundColor: "green" });
$(".child").parents().css({ color: "pink" });

$(".menu").children().css({ border: "1px solid" });

$(".sub1").closest("ul").css({ border: "2px dashed", margin: "10px" });
$(".depth2").closest("ul").css({ border: "2px dashed red", margin: "10px" });
