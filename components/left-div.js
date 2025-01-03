/**
 * Code for the left div/column, is the same on every page.
 * 
 * @class JavaScript custom component
 * @argument pages currently in use. Be sure to update this list of links every
 *           time a page is added or removed to the list of those currently in 
 *           use. 
 */

class LeftDiv extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <logo-block></logo-block>
            <div class="box">
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
            </div
        `;
    }
}

customElements.define('left-div', LeftDiv);