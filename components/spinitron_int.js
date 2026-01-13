"use strict";

(() => {
  Array.from(document.querySelectorAll('.spinitron-js-widget')).forEach((widget, index) => {
    if (widget.getAttribute('data-already-initialized') === 'yes') {
      return;
    }
    widget.setAttribute('data-already-initialized', 'yes');
    let action = widget.getAttribute('data-action');
    if (['now-playing', 'now-playing-v2', 'upcoming-shows', 'current-playlist'].indexOf(action) < 0) {
      action = 'now-playing';
    }
    const callback = `_spinitron${index}${(Math.random().toString() + Date.now()).slice(2, -1)}`;
    let scriptElement;
    window[callback] = function (html) {
      widget.innerHTML = html;
      scriptElement.parentElement.removeChild(scriptElement);
      delete window[callback];
      loadScripts(widget);
    };
    const query = ['station', 'num', 'count', 'time', 'nolinks', 'sharing', 'player', 'cover', 'merch', 'meta', 'layout', 'image', 'description'].reduce((q, param) => {
      const value = widget.getAttribute(`data-${param}`);
      return value ? `${q}&${encodeURIComponent(param)}=${encodeURIComponent(value)}` : q;
    }, `callback=${callback}`);
    scriptElement = document.createElement('script');
    scriptElement.src = `//widgets.spinitron.com/widget/${action}?${query}`;
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
  });
  function loadScripts(widget) {
    const head = document.getElementsByTagName('head')[0];
    let srcScripts = 0;
    const inlineSripts = [];

    // Count src scripts.
    const scripts = Array.prototype.slice.call(widget.getElementsByTagName('script'));
    for (let i = 0; i < scripts.length; i += 1) {
      if (scripts[i].src) {
        srcScripts += 1;
      }
    }
    // Create <script> tags, load src tags, schedule inline tags.
    for (let i = 0; i < scripts.length; i += 1) {
      const script = document.createElement('script');
      if (scripts[i].src) {
        script.src = scripts[i].src;
        script.onload = onLoad;
        script.async = false;
        head.appendChild(script);
        head.removeChild(script);
      } else {
        script.innerHTML = scripts[i].innerHTML;
        inlineSripts.push(script);
      }
    }
    // Immediately load inline scripts if no src are provided.
    if (!srcScripts) {
      onLoad();
    }

    // Load inline scripts once all src scripts are loaded.
    function onLoad() {
      srcScripts -= 1;
      if (!srcScripts) {
        for (let i = 0; i < inlineSripts.length; i++) {
          head.appendChild(inlineSripts[i]);
          head.removeChild(inlineSripts[i]);
        }
      }
    }
  }
})();