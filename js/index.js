const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu nav__menu--visible");

  if (navMenu.classList.contains("nav__menu nav__menu--visible")) {
    navToggle.setAttribute("aria-label", "Abrir menú");
  } else {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  }
});
