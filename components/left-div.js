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
        <div id="leftDivStructure">
            <logo-block id="logo-block"></logo-block>
            
           <!-- <div id="weatherframe">
            </div>-->

            <div class="box">
                <div id="navdiv">
                    <nav>
                        <ul>
                            <li><a href="../home/">home</a></li>
                            <li><a href="../programs/">programs</a></li>
                            <li><a href="../sports/">sports</a></li>
                            <li><a href="../media/">media</a></li>
                            <li><a href="../about/">about</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!--Boxes containing embeddings from radio.co for stream status, recently played,-->
            <div class="box">
                <p>
                    Stream Status: <script src="https://embed.radio.co/embed/s2af1cfe0c/status.js"></script>
                </p>
                <p>
                    Recently Played: <br>
                    <script src="https://embed.radio.co/embed/s2af1cfe0c/history.js?l=5"></script>
                </p>
            </div>

        </div>

        `;
    }
}

customElements.define('left-div', LeftDiv);