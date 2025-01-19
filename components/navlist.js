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
            <div id="navdiv">
                <nav>
                    <ul id="navlist">
                        <li><a href="../home/">home</a></li>
                        <li><a href="../programs/">programs</a></li>
                        <li><a href="../sports/">sports</a></li>
                        <li><a href="../media/">media</a></li>
                        <li><a href="../about/">about</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }
}

customElements.define('site-nav', NavList);