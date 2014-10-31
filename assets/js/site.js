/*
 * Site JS
 */

// animate any element (without jQuery)
function animate (elem, style, unit, from, to, time, prop) {
    if (!elem) { return; }
    var start = new Date().getTime();
    var timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from)) + unit;
            } else {
                elem.style[style] = (from + step * (to - from)) + unit;
            }
            if (step === 1) { clearInterval(timer); }
        }, 25);
    elem.style[style] = from + unit;
}

// set up smooth scroll
function initSmoothScroll () {
    function scrollToEl (e) {
        e.preventDefault();
        var target = this.href.split('#')[1];
        var targetEl = document.querySelector('#' + target);
        animate(document.body, 'scrollTop', '', 0, targetEl.offsetTop, 150, true);
    }

    var internalAnchors = document.querySelectorAll('a[href^="#"]');
    for (var count = internalAnchors.length - 1; count >= 0; count--) {
        internalAnchors[count].addEventListener('click', scrollToEl);
    }
}

// init all
function init () {
    initSmoothScroll();
}

// go!
init();
