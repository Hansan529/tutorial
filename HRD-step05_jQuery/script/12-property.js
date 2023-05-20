// $(".btn>li:eq(1)").click((e) => {
//   e.preventDefault();
//   let $bigImgSrc = $(".bigImg").attr("src");
//   let $bigImgAlt = $(".bigImg").attr("alt");
//   let $src = $(".btn>li:eq(1)").find("img").attr("src");
//   let $alt = $(".btn>li:eq(1)").find("img").attr("alt");
//   $(".bigImg").attr({ src: $src + "/000000/FFFFFF/", alt: $alt });
//   $("h1").text($alt);

//   $(".btn>li:eq(1)").find("img").attr({ src: $bigImgSrc, alt: $bigImgAlt });
// });

$(".btn>li").click(() => {
  let $src = $(this).find("img").attr("src");
  let $alt = $(this).find("img").attr("alt");
  $(".bigImg").attr({ src: $src, alt: $alt });
  $("h1").text($alt);
});
