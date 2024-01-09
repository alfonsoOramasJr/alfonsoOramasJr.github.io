// Changes how the navigation links work, either a direct link or it
// opens on a new tab if your using a desktop view
function setLinkTargetBasedOnView() {
    if (window.innerWidth <= 700) {
        document.getElementsByClassName("top-navigation-link").target = "_self";
    } else {
        document.getElementsByClassName("top-navigation-link").target = "_blank";
    }
}

// Calls the function when the page loads
window.addEventListener("load", setLinkTargetBasedOnView);