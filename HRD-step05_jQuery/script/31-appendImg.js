// imgBtn = function(){
//   $("#wrap").append(`<img src='http://via.placeholder.com/100/000000.jpg>`);
// }

$("button").on("click", function () {
  let rnd = Math.floor(Math.random() * 1000);
  $("#wrap").append(`<img src="http://via.placeholder.com/${rnd}">`);
});
