$(".pop").on("contextmenu", (e) => {
  $(".menu").css({ display: "block", top: e.clientY, left: e.clinetX });
  window.event.returnValue = false;
});
