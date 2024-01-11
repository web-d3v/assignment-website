const openNavButton = document.querySelector("#mobileNavOpen");
const closeNavButton = document.querySelector("#mobileNavClose");

const nav = document.querySelector("nav");
const header = document.querySelector("header");

openNavButton.addEventListener("click", (e) => {
    header.classList.add("openNav")
    nav.classList.add("openNav")
    openNavButton.classList.add("active");
})

closeNavButton.addEventListener("click", (e) => {
    openNavButton.classList.remove("active");
    header.classList.remove("openNav")
    nav.classList.remove("openNav")
})