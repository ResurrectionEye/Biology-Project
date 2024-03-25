import "./jQuery.js";

$(() => {
  // Navigation element
  const Navigation = $("nav");
  const NavigationTablet = $(`
    <div class="Tablet"></div>
  `);

  //  For each
  $(".Slides > .Slide").each(() => {
    Navigation.append(NavigationTablet.clone());
  });

  if ($(".Slides > .Slide").length < 8)
    Navigation.addClass("BrokenLayout");


  const FocusOverlay = document.querySelector("nav > .FocusedOverlay");
  // console.log(FocusOverlay);

  function GetIndex(parent, item) {
    const index = Array.from(parent.children).findIndex(child => child === item);

    return index !== -1 ? index - 1 : null;
  }

  // Some click logic
  $("nav > .Tablet").on("click", (e) => {
    // Final clean up
    if (GetIndex(document.querySelector("nav"), e.target) >= 3) {
      document.querySelectorAll("nav > .Tablet")[GetIndex(document.querySelector("nav"), e.target) - 2].scrollIntoView({
        behavior: "smooth"
      });
    } else if (((GetIndex(document.querySelector("nav"), e.target)) <= 3)) {
      document.querySelectorAll("nav > .Tablet")[0].scrollIntoView({
        behavior: "smooth"
      });
    } else if (((GetIndex(document.querySelector("nav"), e.target)) % 5 <= 3)) {
      document.querySelectorAll("nav > .Tablet")[GetIndex(document.querySelector("nav"), e.target)].scrollIntoView({
        behavior: "smooth"
      });
    }

    // For accessiblity (english*, I don't know how to write that word after all)
    $("nav").find(".Tablet").each(function () {
      $(this).removeClass("Focus");
    });

    // For better experence
    $(document.body).addClass("Disable");

    // Focus on correct slide
    document.querySelectorAll(".Slides > .Slide")[GetIndex(document.querySelector("nav"), e.target)].scrollIntoView({
      behavior: "smooth" // Smoothly
    });

    // Timeout
    setTimeout(() => {
      // Now remove it
      $(document.body).removeClass("Disable");
    }, 200);

    // Add `Focus`
    $(e.target).addClass("Focus");
  });
});