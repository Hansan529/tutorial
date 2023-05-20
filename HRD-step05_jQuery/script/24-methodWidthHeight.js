//.box의 너비값
let w = $(".box").width();
//.box padding이 포함된 너비값
let iw = $(".box").innerWidth();
//.box padding 과 border가 포함된 너비값
let ow = $(".box").outerWidth();

let h = $(".box").height();
//.box padding이 포함된 너비값
let ih = $(".box").innerHeight();
//.box padding 과 border가 포함된 너비값
let oh = $(".box").outerHeight();

console.log("width : " + w);
console.log("innerWidth :" + iw);
console.log("outerWidth:" + ow);
console.log("width : " + h);
console.log("innerWidth :" + ih);
console.log("outerWidth:" + oh);
