/*
 * Site JS
 */

// set up smooth scroll
function initSmoothScroll () {
    smoothScroll.init({
        speed: 750,
        easing: 'easeOutCubic',
        updateURL: false
    });
}

// init header
function initHeader () {
    var header = document.getElementsByTagName('header')[0];

    if (window.innerHeight > header.offsetHeight) {
        header.style['height'] = '' + window.innerHeight + 'px';
    }

    window.fitText(
        document.getElementsByTagName('h1')[0],
        1.2,
        {
            maxFontSize: 61,
            minFontSize: 30
        }
    );
}

// init external links
function initExternalLinks() {
    var aElements = document.getElementsByTagName("a");

    for (i = 0; i < aElements.length; i++) {
        if (aElements[i].hasAttribute('rel') && aElements[i].rel === 'external') {
            aElements[i].addEventListener('click', openExternalLink);
        }
    }
}

// click handler for rel="external" links
function openExternalLink(e) {
    e.preventDefault();
    var href = e.currentTarget.attributes['href'].value;
    window.open(href);
}

// init all
function init () {
    initSmoothScroll();
    initHeader();
    initExternalLinks();
}

// go!
init();
