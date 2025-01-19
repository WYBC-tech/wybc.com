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
                <img src="../assets/images/icons/instagram.png" class="social_icon">
                <a class="social_link" href="https://www.instagram.com/wybcyale/" target="_blank">@WYBCYALE</a>
                </div>

                <div class="social">
                <img src="../assets/images/icons/facebook.png" class="social_icon">
                <a class="social_link" href="https://www.facebook.com/yaleradio/" target="_blank">@YALERADIO</a>
                </div>
            </div>
        `;
    }
}

customElements.define('site-footer', Footer);