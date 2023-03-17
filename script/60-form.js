$("#uName").on("focusin", function () {
  $(this).addClass("bg1");
});
$("#uName").on("focusout", function () {
  $(this).removeClass("bg1");
});

$("#uId").on({
  focus: function () {
    $(this).addClass("bg2");
  },
  blur: function () {
    $(this).removeClass("bg2");
  },
});

$("#address").on("select", function () {
  $(this).addClass("bg3");
});
$("#tel").on("change", function () {
  console.log($(this));
  console.log($(this).val());
  console.log($(this).prop("selectedIndex"));
});

$("#myForm").on("submit", function (e) {
  e.preventDefault();
  alert("submit");
});
