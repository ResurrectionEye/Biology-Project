import "./jQuery.js";

$(() => {
  if (!localStorage.getItem("_Location")) {
    $("nav").find(".Tablet")[0].click();
    $(".Slides").find(".Slide")[0].classList.add("Focus");
  } else {
    $("nav").find(".Tablet")[parseInt(localStorage.getItem("_Location"))].click();
    $(".Slides").find(".Slide")[parseInt(localStorage.getItem("_Location"))].classList.add("Focus");
  }
});