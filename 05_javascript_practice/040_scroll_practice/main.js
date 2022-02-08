document.addEventListener('DOMContentLoaded', function () {
    const cb = function (el, isIntersectiong) {
        if (isIntersectiong) {
            el.classList.add('.inview');
        }
    }

    const so = new ScrollObserver('.cover-slide', cb);
});
