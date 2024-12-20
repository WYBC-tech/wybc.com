class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="navdiv">
        <nav class="navbar">
            <ul class="navlist">
            <li><a href="../shows">shows</a></li>
            <li><a href="../media">media</a></li>
            <li><a href="../about">about</a></li>
            <li><a href="../join">join</a></li>
            <li><a href="../shop">shop</a></li>
            </ul>
        </nav>
        </div>
        `;
    }
}

customElements.define('site-nav', Navbar);