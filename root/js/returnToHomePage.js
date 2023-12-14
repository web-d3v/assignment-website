const HOME_PAGE = "index.html";

const returnToIndex = (e) => {
    if (window.location.pathname.toString().startsWith("/pages")) {
        window.location = "../../" + HOME_PAGE
    } else {
        window.location = "./" + HOME_PAGE
    }
}

document.querySelectorAll("goToHome").forEach(element => {
    returnToIndex(element)    
});