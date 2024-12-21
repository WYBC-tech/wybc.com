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
            </div>
        </footer>
        `;
    }
}

customElements.define('site-footer', Footer);