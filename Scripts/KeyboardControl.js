// most undocumenneted part of the project 
import "./jQuery.js"

// When doc is loaded
$(() => {
  // On `keydown`
  $(window).on("keydown", (e) => {
    if (!e.key.split("Arrow")[0]) {
      // Prevent default option
      e.preventDefault();

      // Direction
      const Direction = e.key.split("Arrow")[1];

      switch (Direction) {
        case "Down":
        case "Right":
          // Simulate click()
          let index = 0;

          $("nav").find(".Tablet").each(function () {
            if ($(this).hasClass("Focus")) {
              return false; // End
            }

            index++;
          });

          index++;

          if ($("nav").find(".Tablet")[index])
            $("nav").find(".Tablet")[index].click();
          break;

        case "Up":
        case "Left":
          // Simulate click()
          let index2 = 0;

          $("nav").find(".Tablet").each(function () {
            if ($(this).hasClass("Focus")) {
              return false; // End
            }

            index2++;
          });

          index2--

          if ($("nav").find(".Tablet")[index2])
            $("nav").find(".Tablet")[index2].click();
          break;

        // Technically it not needed
        default:
          break;
      }
    }
  });
});