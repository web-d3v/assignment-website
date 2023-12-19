const HOME_PAGE = "index.html";

const returnToIndex = () => {
    const pathname = window.location.pathname.toString();
    console.log(pathname);
    const bikesOrPlacesPage = pathname.startsWith("/root/pages/places") || pathname.startsWith("/root/pages/bikes");
    if (pathname.startsWith("/root/pages/") && !bikesOrPlacesPage) {
        window.location = "../" + HOME_PAGE
    } else if (bikesOrPlacesPage) {
        window.location = "../../" + HOME_PAGE
    } else {
        window.location = "./" + HOME_PAGE
    }
}

document.querySelectorAll(".goToHome").forEach(e => {
    e.addEventListener("click", returnToIndex)
});