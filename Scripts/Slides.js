import "./jQuery.js";

// When document is ready
$(() => {
  // Slides
  const $Slides = $(".Slides");

  // Last Scroll Top
  let LastScrollTop = $Slides.scrollTop();

  // Save timeout ID
  let TimeoutID;

  // Get current slide index based on the `scrollTop`
  function GetSlideIndex(_ScrollTop) {
    // Return possible location
    return Math.round(_ScrollTop / window.innerHeight);
  }

  // Another navigator fix
  function NavigatorResponsiveFix(indexI) {
    if (indexI >= 3) {
      document.querySelectorAll("nav > .Tablet")[indexI - 2].scrollIntoView({
        behavior: "smooth"
      });
    } else if (((indexI) <= 3)) {
      document.querySelectorAll("nav > .Tablet")[0].scrollIntoView({
        behavior: "smooth"
      });
    } else if (((indexI) % 5 <= 3)) {
      document.querySelectorAll("nav > .Tablet")[indexI].scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  // Navigator fix function
  function NavigatorFix(indexI) {
    $("nav").find(".Tablet").each(function (indexJ) {
      $(this).removeClass("Focus");

      if (indexI === indexJ)
        $(this).addClass("Focus");
    });

    NavigatorResponsiveFix(indexI);
  }

  // Correct location
  function LocationCorrection(_Location) {
    // Check if exists, to avoid any error
    if (document.querySelectorAll(".Slides > .Slide")[_Location]) {
      // SIV (Scroll Into View)
      document.querySelectorAll(".Slides > .Slide")[_Location].scrollIntoView({
        behavior: "smooth" // Smoothly
      });
    }
  }

  // Make it global to use in the other modules
  window.LocationCorrection = (_Location) => LocationCorrection(_Location);

  // Watch for `scrollTop` changes
  function WatchForScrollTopChanges() {
    // Scroll top, but another; it's constant value
    const CurrentScrollTop = $Slides.scrollTop();

    // If it changed
    if (CurrentScrollTop !== LastScrollTop) {
      // Debug
      // console.log('scrollTop changed:', CurrentScrollTop);

      // Clear timeout if it exists
      if (TimeoutID) {
        clearTimeout(TimeoutID);
        TimeoutID = null;
      }

      // Correct Location if needed after a delay
      if (CurrentScrollTop % window.innerHeight !== 0)
        TimeoutID = setTimeout(() => {
          // Send for correction
          LocationCorrection(GetSlideIndex(CurrentScrollTop));
        }, 100);

      NavigatorFix(GetSlideIndex(CurrentScrollTop));

      // For navigation;
      (() => {
        // There's nothing ;)
      })();

      // Need for navigating over page
      $(".Slides > .Slide").removeClass("Focus");
      $(".Slides > .Slide").eq(GetSlideIndex(CurrentScrollTop)).addClass("Focus");
      
      // Sync part
      localStorage.setItem("_Location", GetSlideIndex(CurrentScrollTop));

      // Last `scrollTop` is current `scrollTop` now
      LastScrollTop = CurrentScrollTop;
    }

    // Request a frame
    requestAnimationFrame(WatchForScrollTopChanges);
  }

  // Start watching for scrollTop changes
  WatchForScrollTopChanges();

  $(window).on("resize", () => {
    LocationCorrection(GetSlideIndex($Slides.scrollTop()))

    // No more need
    // console.log('Resized');
  });

  // Set timeout to clear console after 1000ms
  TimeoutID = setTimeout(() => {
    console.clear();
  }, 1000);
});
