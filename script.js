
AOS.init();

let openMenu = document.querySelector(".menu0pen");
let contantMenu = document.querySelector(".content-mobile");
let isMenuOpen = false;

openMenu.addEventListener("click", () => {
  if (isMenuOpen) {
    contantMenu.style.top = "-200px";
  } else {
    contantMenu.style.top = "80px";
  }
  isMenuOpen = !isMenuOpen;
});
