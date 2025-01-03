/**
 * A list of links connecting to external WYBC social media accounts.
 * 
 * @class JavaScript custom component
 * @argument accounts for all WYBC social media presences. Be sure to update
 *           the .socials div every time social media accounts are added or 
 *           deleted. 
 */

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footerdiv">
            <div class="socials">
                <div id="social">
                <img src="../assets/images/icons/instagram.png" id="socials_icon">
                <a id="social_link" href="https://www.instagram.com/wybcyale/" target="_blank">@WYBCYALE</a>
                </div>

                <div id="social">
                <img src="../assets/images/icons/facebook.png" id="socials_icon">
                <a id="social_link" href="https://www.facebook.com/yaleradio/" target="_blank">@YALERADIO</a>
                </div>
            </div>

            <div class="contacts">
                <div id="contact">
                <a id="contact_link" href="../about/">Get in touch!</a>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('site-footer', Footer);