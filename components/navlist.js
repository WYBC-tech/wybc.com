/**
 * A list of links that facilitate the modular addition of a navbar or navmenu
 * anywhere in page code.
 * 
 * @class JavaScript custom component
 * @argument pages currently in use. Be sure to update this list of links every
 *           time a page is added or removed to the list of those currently in 
 *           use. 
 */

class NavList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="navdiv">
        <nav class="navbar">
            <ul class="navlist">
            <li><a id="nav_link" href="../home/">home</a></li>
            <li><a id="nav_link" href="../programs/">programs</a></li>
            <li><a id="nav_link" href="../media/">media</a></li>
            <li><a id="nav_link" href="../about/">about</a></li>
            </ul>
        </nav>
        </div>
        `;
    }
}

customElements.define('site-nav', NavList);