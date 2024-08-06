const carousels = document.querySelectorAll(".carousel");
carousels.forEach(carousel => {
    const carouselItems = carousel.querySelectorAll(".carouselItems > *");
    const carouselControls = carousel.querySelector(".carouselControls");
    const nextItem = carouselControls.querySelector(".nextItem");
    const previousItem = carouselControls.querySelector(".previousItem");
    const ItemCounter = carouselControls.querySelector("p");
    const ItemTitle = carousel.querySelector(".carouselItemTitle")
    const ItemLink = carousel.querySelector(".carouselItemLink")
    var selectedItemIndex = 0;
    changeCounter(ItemCounter, selectedItemIndex, carouselItems.length);
    changeTitle(ItemTitle, carouselItems.item(selectedItemIndex));
    if (carousel.id == "videos") {
        changeLink(ItemLink,carouselItems.item(selectedItemIndex))
    }
    nextItem.addEventListener("click", () => {
        const selectedItem = carouselItems.item(selectedItemIndex);
        if (selectedItem) {
            selectedItem.classList.remove("selected")
        }
        selectedItemIndex += 1;
        if (selectedItemIndex >= carouselItems.length) {
            selectedItemIndex = 0
        }
        const nextSelectedItem = carouselItems.item(selectedItemIndex)
        if (nextSelectedItem) {
            nextSelectedItem.classList.add("selected")
        }
        changeCounter(ItemCounter, selectedItemIndex, carouselItems.length)
        changeTitle(ItemTitle, nextSelectedItem)
    })
    previousItem.addEventListener("click", () => {
        const selectedItem = carouselItems.item(selectedItemIndex);
        if (selectedItem) {
            selectedItem.classList.remove("selected")
        }
        if (selectedItemIndex <= 0) {
            selectedItemIndex = carouselItems.length - 1
        } else {
            selectedItemIndex -= 1
        }
        const nextSelectedItem = carouselItems.item(selectedItemIndex)
        if (nextSelectedItem) {
            nextSelectedItem.classList.add("selected")
        }
        changeCounter(ItemCounter, selectedItemIndex, carouselItems.length)
        changeTitle(ItemTitle, nextSelectedItem)
    })
})


function changeCounter(counter, index, length) {
    counter.innerHTML = `${index + 1} / ${length}`
}

function changeTitle(title, item) {
    title.innerHTML = item.getAttribute("data-title") ? item.getAttribute("data-title") : "No Title";
}

function changeLink(linkText, item) {
    linkText.href = item.getAttribute("data-link") ? item.getAttribute("data-link") : "#";
}




