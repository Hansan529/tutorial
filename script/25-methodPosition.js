//.box의 위치값 얻어오기
//부모요소를 기준으로 위치값
let pLeft = $(".box").position().left;
let pTop = $(".box").position().top;
console.log(`position left : ${pLeft}`);
console.log(`position top : ${pTop}`);

//body를 기준으로 위치값
let bLeft = $(".box").offset().left;
let bTop = $(".box").offset().top;

console.log(`offset left :${bLeft}`);
console.log(`offset top : ${bTop}`);
