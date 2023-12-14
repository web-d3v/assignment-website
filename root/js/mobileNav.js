const openNavButton = document.querySelector("#mobileNavOpen");
const closeNavButton = document.querySelector("#mobileNavClose");
const TIMEOUT = 1498;

const MENU_ICON = ["fas", "fa-bars"];
const XMARK_ICON = ["fa-solid", "fa-xmark"];

const handleMenuIconChange = () => {
    const icon = openNavButton.querySelector("i");
    icon.style.transition = "all ease-in 1.3s";
    if (openNavButton.classList.contains("open")) {
        icon.style.transform = "rotate(360deg)"
        setTimeout(() => {
            icon.classList.remove(...XMARK_ICON)
            icon.classList.add(...MENU_ICON)
        }, TIMEOUT);
        openNavButton.classList.remove("open")
    } else {
        icon.style.transition = "all ease-in 1.3s";
        icon.style.transform = "rotate(270deg)"
        setTimeout(() => {
            icon.classList.add(...XMARK_ICON)
            icon.classList.remove(...MENU_ICON)
            icon.style.transform = "rotate(-90deg)";
        }, TIMEOUT);
        openNavButton.classList.add("open")
    }
}
const nav = document.querySelector("nav");
nav.style.transition = "height ease 0.55s";
const header = document.querySelector("header");

openNavButton.addEventListener("click", (e) => {

    header.style.borderBottom = "2px solid white";
    nav.style.height = "100vh";
    openNavButton.style.borderTop = "2px groove var(--accent1)"
    openNavButton.style.borderBottom = "2px groove var(--accent1)"
})

closeNavButton.addEventListener("click", (e) => {
    
    openNavButton.style.borderTop = "none"
    openNavButton.style.borderBottom = "none"
    header.style.borderBottom = "none";
    nav.style.height = "0";
})
