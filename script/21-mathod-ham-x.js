$(".hamBtn > a > img").attr(
  "src",
  "https://via.placeholder.com/200?text=hamBtn"
);
$(".toggleHam").on("click", function () {
  $(".toggleHam > a").toggleClass("active");
});
