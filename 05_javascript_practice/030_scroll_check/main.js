document.addEventListener('DOMContentLoaded', function () {
    const cb = function (el, isIntersectiong) {
        if (isIntersectiong) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb);
});
