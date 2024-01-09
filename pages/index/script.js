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

async function getProjectDescription(file, identifier){
   let projectFileObject = await fetch(file);
   let projectDescription = await projectFileObject.text();
   document.getElementById(identifier).innerHTML = projectDescription;
}

// Calls the function when the page loads
window.addEventListener("load", getProjectDescription("pages\\index\\public\\descriptions\\smart-home-automation.txt", "smart-home-automation-description"))
window.addEventListener("load", getProjectDescription("pages\\index\\public\\descriptions\\vertical-landing-rocket.txt", "vertical-landing-rocket-description"))
window.addEventListener("load", setLinkTargetBasedOnView);