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

// init all
function init () {
    initSmoothScroll();
}

// go!
init();
