import "./jQuery.js";

$(() => {
  let IntervalID;

  // Capture mouse movements
  $(window).on("mousemove", () => {
    // If moved
    $("#App").removeClass("Focus");
    clearInterval(IntervalID);

    // If not
    IntervalID = setInterval(() => {
      $("#App").addClass("Focus");
    }, 2500);
  })

  // Capture scroll movements
  $("#App .Slides").on("scroll", () => {
    // If moved
    $("#App").removeClass("Focus");
    clearInterval(IntervalID);

    // If not
    IntervalID = setInterval(() => {
      $("#App").addClass("Focus");
    }, 2500);
  })
});