const navBarIcon = document.getElementById("menu-icon")
const mobileMenu = document.getElementById("mobile-menu")

navBarIcon.addEventListener("click", function(event){
    mobileMenu.style.display = "flex"
})
const closeIcon = document.getElementById("close-icon")

closeIcon.addEventListener("click", function(event){
    mobileMenu.style.display = "none"
})