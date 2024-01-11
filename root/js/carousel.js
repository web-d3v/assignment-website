const carousel = document.querySelector(".carousel");
const carouselItems = carousel.querySelectorAll(".carouselItems > *");
const carouselControls = carousel.querySelector(".carouselControls");
const nextItem = carouselControls.querySelector("#nextItem");
const previousItem = carouselControls.querySelector("#previousItem");
const ItemCounter = carouselControls.querySelector("p");
const ItemTitle = carousel.querySelector("#carouselItemTitle")
var selectedItemIndex = 0;
changeCounter(selectedItemIndex, carouselItems.length);
changeTitle(carouselItems.item(selectedItemIndex));

function changeCounter(index, length) {
    ItemCounter.innerHTML = `${index + 1} / ${length}`
}

function changeTitle(item) {
    ItemTitle.innerHTML = item.getAttribute("data-title");
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
    changeCounter(selectedItemIndex, carouselItems.length)
    changeTitle(nextSelectedItem)
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
    changeCounter(selectedItemIndex, carouselItems.length)
    changeTitle(nextSelectedItem)
})

