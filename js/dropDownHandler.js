const addEventListeners = (listenerElement, content, secondLE) => {
    const mainContent = document.querySelector("main");
    listenerElement.addEventListener("mouseenter", (e) => {
        content.style.transition = "height 5s"
        content.style.display = "block"
        content.style.height = "300px"
        mainContent.style.marginTop = "150px"
        secondLE.querySelector("i").style.rotate = "180deg"
    })
    listenerElement.addEventListener("mouseleave", (e) => {
        content.style.height = "0px";
        mainContent.style.marginTop = "0"
        content.style.display = "none"
    })
    //secondLE.addEventListener("click", (e) => {
    //    e.preventDefault()
    //    if (!clicked) {
    //        content.style.transition = "height 5s"
    //        content.style.display = "block"
    //        content.style.height = "300px"
    //        mainContent.style.marginTop = "150px"
    //        clicked = true
    //    } else {
    //        content.style.transition = "height 5s"
    //        content.style.display = "none"
    //        content.style.height = "0"
    //        mainContent.style.marginTop = "0"
    //        clicked = false
    //    }
    //    secondLE.classList.toggle("active")
    //})
}

const dropDowns = document.querySelectorAll(".dropDown");
for (var i = 0; i < dropDowns.length; i++) {
    const dropDown = dropDowns[i];
    let h = dropDown.style.height;
    const dropDownToggle = dropDown.querySelector(".dropDownToggle");
    const dropDownContent = dropDown.querySelector(".dropDownContent");

    addEventListeners(dropDown, dropDownContent, dropDownToggle);
}