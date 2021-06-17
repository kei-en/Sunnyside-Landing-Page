/* Toggle between showing and hiding the navigation menu links when the user 
clicks on the hamburger menu / bar icon */
let mobileNav = document.getElementById("mobile-nav")

function hamburgerMenu() {

        if(mobileNav.style.display === "flex") {
            mobileNav.style.display = "none"
        }
        else {
            mobileNav.style.display = "flex"
        }
}

function hideMenu(){
    if(screen.width > 768 && mobileNav.style.display === "flex")
        mobileNav.style.display = "none"
}