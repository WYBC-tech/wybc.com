/**
 * A modular block allowing quick + easy placement of the WYBC logo, title, 
 * and tagline (currently: "Yale Student Radio") anywhere on the site.
 * 
 * @class JavaScript custom component
 * @argument logo and tagline. Update needed only when either changes. Or if
 *           the site gets renamed to something other than WYBCx.
 */

class LogoBlock extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="logo_blockdiv">
        <div id="logodiv">
            <img src="../assets/images/favicon.ico" id="logo"/>
            <div id="titlediv">
            <h1 id="title_heading">WYBCx</h1>
            <h2 id="subtitle_heading">Yale Student Radio</h2>
            </div>
        </div>
        </div>
        `;
    }
}

customElements.define('logo-block', LogoBlock);