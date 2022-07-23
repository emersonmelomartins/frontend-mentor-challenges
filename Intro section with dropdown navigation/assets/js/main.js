function load() {
  const menu = document.querySelector(".navbar__hamburger");
  const closeMenu = document.querySelector(".close-btn");
  const navbar = document.querySelector(".navbar__menu");
  const dropdownList = document.querySelectorAll(".navbar__dropdown");

  
  menu.addEventListener("click", () => {
    navbar.classList.toggle("menu__active");
  });
  
  closeMenu.addEventListener("click", () => {
    navbar.classList.toggle("menu__active");
  });

  dropdownList.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      dropdown
        .querySelector(".navbar__dropdown--content")
        .classList.toggle("dropdown__active");
    });
  });
}
