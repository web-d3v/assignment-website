const toggleButton = document.querySelector("#mobileNavToggle");
const showElement = (element, transition, height) => {
    element.style.height = window.screen.height
    element.classList.toggle("show")
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden")
    }
}
toggleButton.addEventListener("click", (e) => {
    const nav = document.querySelector("nav");
    const navItems = nav.querySelector("section");
    const dropDowns = navItems.querySelectorAll(".dropDown");
    for (var i = 0; i < dropDowns.length; i++) {
        const dropDown = dropDowns[i];
        const dropDownContent = dropDown.querySelector(".dropDownContent");
        showElement(dropDown);
    }
    showElement(navItems)
    showElement(nav, true, navItems.offsetHeight)
    const closeNav = nav.querySelector(".closeNav")
    showElement(closeNav)
    closeNav.style.marginTop = "3rem"
    showElement(closeNav.querySelector("i"))
    closeNav.querySelector("i").style.fontSize = "4rem"
    
})