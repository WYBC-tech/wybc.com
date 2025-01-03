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
                <site-nav></site-nav>
            </div>
        `;
    }
}

customElements.define('left-div', LeftDiv);