//eventos de menu hamburguesa
document.querySelector(".header__menuHamburguesa").addEventListener("click", animacionMenu)
let line1 = document.querySelector(".header__menuHamburguesa-line1");
let line2 = document.querySelector(".header__menuHamburguesa-line2");
let line3 = document.querySelector(".header__menuHamburguesa-line3");
let menuItems = document.querySelector(".nav__link");
let menu = document.querySelector(".nav");
let header = document.querySelector(".header");

function animacionMenu (){
    line1.classList.toggle("activeheader__menuHamburguesa-line1");
    line2.classList.toggle("activeheader__menuHamburguesa-line2");
    line3.classList.toggle("activeheader__menuHamburguesa-line3");

    menuItems.classList.toggle("activenav__link");
    menu.classList.toggle("activenav");
    header.classList.toggle("activeheader");
}

//eventos de despliege de rendimientos
document.querySelector(".header__menuItems span").addEventListener("click", rendimientos)
let flecha = document.querySelector(".header__menuItemsFlecha");
function rendimientos (){
    flecha.classList.toggle("activeheader__menuItemsFlecha");
}