window.onload = function () {

  const dropdownIcons = document.getElementsByClassName('nav-dropdown-icon');
  [].forEach.call(dropdownIcons, function (dI) {
    // Find nav
    dI.onclick = () => {
      const nav = dI.parentElement;
      nav.classList.toggle('expanded');
    }
  });
}