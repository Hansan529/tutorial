let copyLi = $(".list>li").first().clone();

$(".list").append(copyLi);

let bannerFirst = $(".banner>li").first().clone();
let bannerLast = $(".banner>li").last().clone();

$(".banner").append(bannerFirst);
$(".banner").prepend(bannerLast);
