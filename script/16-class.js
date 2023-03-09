$("#nav").css({
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  listStyle: "none",
});

$("#nav>li>a").css({
  fontSize: "20px",
  color: "#333",
});

$("#nav>.active>a").css({
  textDecoration: "underline",
  color: "dodgerblue",
});

$("#nav>li").click(() => {
  $(this).addClass("active").siblings().removeClass("active");
});
