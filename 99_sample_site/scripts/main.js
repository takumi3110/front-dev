document.addEventListener('DOMContentLoaded', function() {
    const hero = new HeroSlider('.swiper');
    hero.start();
    //
    // setTimeout(() => {
    //     hero.stop();
    // }, 5000);
    const cb = function (el, isIntersectiong) {
        if (isIntersectiong) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.tween-animate-title', cb);
});
