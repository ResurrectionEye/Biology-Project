(() => {
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

  if (localStorage.getItem("Theme")) {
    ToggleTheme((localStorage.getItem("Theme") == 'Light') ? 0 : 1)
    console.log((localStorage.getItem("Theme") == 'Light') ? 1 : 0);
  }
})()