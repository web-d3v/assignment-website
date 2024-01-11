var selectedImageIndex = 0; // default
var carouselImages = ["image1", "image2", "image3"];

const nextImage = () => {
    const selectedImage = carouselImages[selectedImageIndex];
    //if (selectedImage) {
    //    selectedImage.classList.remove("selected")
    //}
    selectedImageIndex += 1;
    if (selectedImageIndex >= carouselImages.length) {
        selectedImageIndex = 0 // default, makes the carousel loop
    }
    const nextSelectedImage = carouselImages[selectedImageIndex];
    //if (nextSelectedImage) {
    //    nextSelectedImage.classList.add("selected")
    //}
    console.log(selectedImageIndex, selectedImage, nextSelectedImage, carouselImages)
    console.log(`${selectedImageIndex + 1} / ${carouselImages.length}`)
    //imageCounter.innerHTML = `${selectedImageIndex + 1} / ${carouselImages.length}`
}



const previousImage = () => {
    const selectedImage = carouselImages[selectedImageIndex];
    //if (selectedImage) {
    //    selectedImage.classList.remove("selected")
    //}
    //selectedImageIndex -= 1;
    if (selectedImageIndex <= 0) {
        selectedImageIndex = carouselImages.length - 1 // default, makes the carousel loop
    } else {
        selectedImageIndex -= 1
    }
    const nextSelectedImage = carouselImages[selectedImageIndex];
    //if (nextSelectedImage) {
    //    nextSelectedImage.classList.add("selected")
    //}
    console.log(selectedImageIndex, selectedImage, nextSelectedImage, carouselImages)
    console.log(`${selectedImageIndex + 1} / ${carouselImages.length}`)
}

console.log("PREVIOUS")
previousImage()
previousImage()
previousImage()
previousImage()
previousImage()
previousImage()

console.log("NEXT")
nextImage()
nextImage()
nextImage()
nextImage()
nextImage()
nextImage()