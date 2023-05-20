let sizeX = 100;
let sizeY = 100;

$("#sizeX, #sizeY").change(() => {
  sizeX = $("#sizeX").val();
  sizeY = $("#sizeY").val();
});

// document.querySelector("button").onclick = () => {
//   document.querySelector(
//     "img"
//   ).src = `https://via.placeholder.com/${sizeX}x${sizeY}`;
// };

$("img").css({ display: "block" });

$("button").click(() => {
  $("img").attr({ src: `https://via.placeholder.com/${sizeX}x${sizeY}` });
});
