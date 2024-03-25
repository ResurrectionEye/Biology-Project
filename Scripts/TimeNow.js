import "./jQuery.js";

$(() => {
  setInterval(() => {
    $(".Time").html(`${new Date().getHours()} : ${new Date().getMinutes()}`);
  }, 1000);

  $(window).on("keydown", (e) => {
    if (e.key === 'F1') {
      e.preventDefault();
      $(".Time").toggleClass("Show");
    }
  });
});