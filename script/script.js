const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("hallo");
}


const menuItems = document.querySelectorAll(".menu a");

menuItems.forEach(n => n.addEventListener("click", sluitMenu));

function sluitMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}