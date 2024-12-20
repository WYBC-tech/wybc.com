class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="footerdiv">
        
        </footer>
        `;
    }
}

customElements.define('site-footer', Footer);