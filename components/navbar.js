class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="navdiv">
        <nav class="navbar">
            <ul class="navlist">
            <li><a id="nav_link" href="../shows">shows</a></li>
            <li><a id="nav_link" href="../media">media</a></li>
            <li><a id="nav_link" href="../about">about</a></li>
            <li><a id="nav_link" href="../shop">shop</a></li>
            </ul>
        </nav>
        </div>
        `;
    }
}

customElements.define('site-nav', Navbar);