// first-child
$("#nav>li:first-child").css({ background: "pink" });

// last-child
$("#nav>li:last-child").css({ background: "skyblue" });

// frist
// $(".menu>li:first")
$(".menu>li").first().css({ color: "red" });

// last
// $(".menu>li:last")
$(".menu>li").last().css({ color: "blue" });

// nth-child
$("#nav>li:nth-child(3)").css({ fontSize: "30px" });
$(".menu>li").eq(2).css({ backgroundColor: "lightgreen" });

// odd, even
$(".cssList>li:nth-child(even)").css({ background: "hotpink" });
$(".cssList>li:nth-child(odd)").css({ color: "hotpink" });
// odd+1, even+1
$(".list>li").even().css({ color: "hotpink" });
$(".list>li").odd().css({ background: "hotpink" });

// siblings gt:> lt:<
$(".list>li:gt(3)").css({ fontSize: "25px" });
$(".list>li:lt(3)").css({ border: "1px solid", padding: "5px" });
