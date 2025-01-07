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
                <div id="ww_15ffaf77290c5" v='1.3' loc='id' a='{"t":"responsive","lang":"en","sl_lpl":1,"ids":["wl3490"],"font":"Arial","sl_ics":"one","sl_sot":"fahrenheit","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","el_wfc":3,"cl_odd":"#00000000"}'>More forecasts: <a href="https://forecast7.com/en/41d31n72d93/new-haven/?unit=us" id="ww_15ffaf77290c5_u" target="_blank">New Haven, CT Weather</a></div><script async src="https://app3.weatherwidget.org/js/?id=ww_15ffaf77290c5"></script>       
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