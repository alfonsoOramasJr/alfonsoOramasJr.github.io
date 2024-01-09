// Changes how the navigation links work, either a direct link or it
// opens on a new tab if your using a desktop view
function setLinkTargetBasedOnView() {
    if (window.innerWidth <= 700) {
        document.getElementsByClassName("top-navigation-link").target = "_self";
        return "mobile-view-detected";
    } else {
        document.getElementsByClassName("top-navigation-link").target = "_blank";
        return "desktop-view-detected";
    }
}

// Calls the function when the page loads
window.addEventListener("load", setLinkTargetBasedOnView);