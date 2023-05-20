let sNum = 0;

let obj = $(".banner >.b1").clone();

$(".banner").append(obj);

let liCount = $(".banner>li").length;

console.log(liCount);

$(".banner").width(liCount * 100 + "%");

let liWidth = $(".banner>li").width();
console.log(liWidth);

function moveBanner() {
  $(".banner")
    .stop()
    .animate(
      {
        marginLeft: -sNum * liWidth,
      },
      1000
    );
}

let timer = setInterval(function () {
  if (sNum > 3) {
    sNum = 0;
    $(".banner").css("margin-left", 0);
  } else {
    sNum++;
  }
  console.log(sNum);
  moveBanner();
}, 2000);
