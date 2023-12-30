const carousel = document.querySelector(".carousel");
const carouselImages = carousel.querySelectorAll(".carouselImages img");
const carouselControls = carousel.querySelector(".carouselControls");
const nextImage = carouselControls.querySelector("#nextImage");
const previousImage = carouselControls.querySelector("#previousImage");
const imageCounter = carouselControls.querySelector("p");

var selectedImageIndex = 0; // default



nextImage.addEventListener("click", () => {
    console.log(selectedImageIndex, "NEXT")
    const selectedImage = carouselImages.item(selectedImageIndex);
    if (selectedImage) {
        selectedImage.classList.remove("selected")
    }
    selectedImageIndex += 1;
    if (selectedImageIndex >= carouselImages.length) {
        selectedImageIndex = 0 // default, makes the carousel loop
    }
    const nextSelectedImage = carouselImages.item(selectedImageIndex)
    if (nextSelectedImage) {
        nextSelectedImage.classList.add("selected")
    }
    console.log(selectedImageIndex, selectedImage, nextSelectedImage, carouselImages)
    imageCounter.innerHTML = `${selectedImageIndex + 1} / ${carouselImages.length}`
})
previousImage.addEventListener("click", () => {
    console.log(selectedImageIndex, "PREVIOUS")
    const selectedImage = carouselImages.item(selectedImageIndex);
    if (selectedImage) {
        selectedImage.classList.remove("selected")
    }
    selectedImageIndex -= 1;
    if (selectedImageIndex <= 0) {
        selectedImageIndex = carouselImages.length - 1 // default, makes the carousel loop
    }
    const nextSelectedImage = carouselImages.item(selectedImageIndex)
    if (nextSelectedImage) {
        nextSelectedImage.classList.add("selected")
    }
    console.log(selectedImageIndex, selectedImage, nextSelectedImage, carouselImages)
    imageCounter.innerHTML = `${selectedImageIndex + 1} / ${carouselImages.length}`
})