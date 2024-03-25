import "./jQuery.js"

$(() => {
  const Menu = $(".Burger");

  Menu.on("click", () => {
    $("#App").toggleClass("Open");

    if ($("#App").hasClass("Open")) {

    }
  });

  function SetRoot(ID, Value) {
    document.documentElement.style.setProperty(ID, Value);
  }

  function ToggleTheme(par) {
    if (!par) {
      SetRoot("--Primary", "#f1f4f6")
      SetRoot("--Secondary", "#cbcbcb")
      SetRoot("--Tertiary", "#73b073")
      SetRoot("--Text", "#1a1c1a")
    } else {
      SetRoot("--Primary", "#1a1c1a")
      SetRoot("--Secondary", "#353635")
      SetRoot("--Tertiary", "#5f7f5f")
      SetRoot("--Text", "#f1f4f6")
    }
  }

  window.ToggleTheme = (par) => ToggleTheme(par);

  $(".DropdownButton").each(function () {
    let button = $(this);

    $(this).find(".MenuDropdown").find("button").each(function () {
      $(this).on("click", () => {
        button.find("label").click();
      });
    });
  });

  setTimeout(() => {
    $(".Queue").addClass("Disable");
  }, 2500);
});