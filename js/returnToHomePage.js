const desktopLogo = document.querySelector(".desktopLogo");
const mobileLogo = document.querySelector(".mobileLogo");
const homeNavItem = document.querySelector("#homeNavItem");

const HOME_PAGE = "index.html";

const returnToIndex = (e) => {
    if (window.location.pathname.toString().startsWith("/pages")) {
       //window.location = "../../"+HOME_PAGE
    } else {
        //window.location = "./"+HOME_PAGE
    }
}

desktopLogo.addEventListener("click", returnToIndex);
mobileLogo.addEventListener("click", returnToIndex);
homeNavItem.addEventListener("click", returnToIndex)