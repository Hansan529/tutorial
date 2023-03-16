let sNum = 0;

function counter() {
  sNum++;
  $("strong").text(sNum);
}

setInterval(counter, 1000);
