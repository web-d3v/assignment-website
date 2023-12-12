const deactivateDropdown = (dropdown, mainContent) => {
    dropdown.classList.remove("invisible-active");
    const toggle = dropdown.querySelector(".dropDownToggle");
    const content = dropdown.querySelector(".dropDownContent");
    toggle.classList.toggle("dd-active");
    content.style.transition = "all 1s"
    content.style.maxHeight = "0"
    content.style.display = "none"
    //mainContent.style.marginTop = "150px"
    toggle.querySelector("i").style.rotate = "0deg"
}

const activateDropdown = (dropdown, mainContent) => {
    dropdown.classList.toggle("invisible-active");
    const toggle = dropdown.querySelector(".dropDownToggle");
    const content = dropdown.querySelector(".dropDownContent");
    toggle.classList.toggle("dd-active")
    content.style.transition = "all 1s"
    content.style.maxHeight = "300px"
    content.style.display = "block"
    //mainContent.style.marginTop = "150px"

    toggle.querySelector("i").style.transition = "all 1s"
    toggle.querySelector("i").style.rotate = "180deg"
}

const dropDowns = document.querySelectorAll(".dropDown");
for (var i = 0; i < dropDowns.length; i++) {
    const dropDown = dropDowns[i];
    const mainContent = document.querySelector(".columns");
    dropDown.addEventListener("click", (e) => {
        const activeDropdown = document.querySelector(".invisible-active");
        if (activeDropdown) {
            if (activeDropdown.attributes.getNamedItem("category") !== dropDown.attributes.getNamedItem("category")) {
                deactivateDropdown(activeDropdown)
            }
        }
        if (dropDown.classList.contains("invisible-active")) {
            deactivateDropdown(dropDown)
        } else {
            activateDropdown(dropDown)
        }
    })
    dropDown.addEventListener("mouseenter", () => {
        const activeDropdown = document.querySelector(".invisible-active");
        if (activeDropdown) {
            if (activeDropdown.attributes.getNamedItem("category") !== dropDown.attributes.getNamedItem("category")) {
                deactivateDropdown(activeDropdown)
            }
        }
        activateDropdown(dropDown)
    })
}