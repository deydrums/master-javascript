document.addEventListener("DOMContentLoaded", function() { 

const hamburger = document.querySelector(".boton-menu");
const navMenu = document.querySelector(".menu ul");
const navLink = document.querySelectorAll(".menu ul li a");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

});