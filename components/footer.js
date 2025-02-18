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
            <div id="socials">
                <div class="social">
                <a class="social_link" href="https://www.instagram.com/wybcyale/" target="_blank">
                    <img src="../assets/images/icons/instagram.png" alt="instagram icon" class="social_icon">
                    @WYBCYALE
                </a>
                </div>

                <div class="social">
                <a class="social_link" href="https://www.facebook.com/yaleradio/" target="_blank">
                    <img src="../assets/images/icons/facebook.png" alt="facebook icon" class="social_icon">
                    @YALERADIO
                </a>
                </div>

                <div class="social"
                <a href="tel:+1(203)800-4620"> Call in at +1 (203) 800-4620</a>

                <div class="social">
                <a href="https://wybc.creek.fm">Old Website</a>
            </div>
        `;
    }
}

customElements.define('site-footer', Footer);