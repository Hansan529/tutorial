$(".click").on("click", function (e) {
  // $(this).css({
  //   background: "pink",
  // });
  $(e.target).css({ background: "pink" });
  $(e.currentTarget).css({ background: "skyblue" });
});

$(".eventType").on("mouseover focus", (e) => {
  $(e.currentTarget).css("background", "green");
});

$(".event").on({
  click: (e) => {
    $(e.currentTarget).css("font-size", "30px");
  },
  mouseover: (e) => {
    $(e.currentTarget).css({ background: "skyblue" });
  },
  mouseout: (e) => {
    $(e.currentTarget).css({ textDecoration: "underline", background: "pink" });
  },
});
