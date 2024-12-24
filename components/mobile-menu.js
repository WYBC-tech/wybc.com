/**
 * A function to allow elements with the Element ID "mobile-nav-menu" to have 
 * a toggleable class name. This is used in the current page template to have
 * a dropdown menu; normally hidden, showing itself on the click of a separate
 * button.
 * 
 * @returns false, just to get the href="#" to not act as a "back to top" link
 */

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
