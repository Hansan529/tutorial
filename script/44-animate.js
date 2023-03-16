$("button:eq(0)").on("click", function () {
  $(".box").stop().animate(
    {
      width: "200px",
      height: 200,
      opacity: 0.5,
    },
    500
  );
});
$("button:eq(1)").on("click", function () {
  $(".box").stop().animate(
    {
      width: 50,
      height: 50,
      opacity: 1,
    },
    500
  );
});
$("button:eq(2)").on("click", function () {
  $(".box").stop().animate(
    {
      marginLeft: "90%",
      backgroundColor: "teal",
      width: 200,
      height: 200,
    },
    1000,
    "easeInOutElastic"
  );
});
$("button:eq(3)").on("click", function () {
  $(".box")
    .stop()
    .animate(
      {
        marginLeft: 0,
      },
      500,
      function () {
        $(this).animate(
          {
            width: 50,
            height: 50,
            backgroundColor: "blue",
          },
          500
        );
      }
    );
});
