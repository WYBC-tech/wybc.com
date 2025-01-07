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
            <!--Weather widget-->
            <div class="weather">
                <a class="weatherwidget-io" href="https://forecast7.com/en/41d31n72d93/new-haven/?unit=us" target=_blank data-label_1="NEW HAVEN" data-label_2="WEATHER" data-font="Verdana" data-mode="Current" data-theme="kiwi" >New Haven, CT</a>
                <script>
                    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
                </script>                
            </div>
            <div class="box">
                <div class="navdiv">
                    <nav class="navbar">
                        <ul class="navlist">
                            <li><a id="nav_link" href="../home/">home</a></li>
                            <li><a id="nav_link" href="../programs/">programs</a></li>
                            <li><a id="nav_link" href="../media/">media</a></li>
                            <li><a id="nav_link" href="../about/">about</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        `;
    }
}

customElements.define('left-div', LeftDiv);