function mobileMenu() {
    var x = document.getElementById("mobile-nav-menu");
    
    if (x.className == "menu") {
        x.className = "menu-show";
    } 
    
    else {
        x.className = "menu";
    }

    return false;
}
