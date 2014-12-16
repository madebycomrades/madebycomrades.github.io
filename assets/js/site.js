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

// init all
function init () {
    initSmoothScroll();
    initHeader();
}

// go!
init();
