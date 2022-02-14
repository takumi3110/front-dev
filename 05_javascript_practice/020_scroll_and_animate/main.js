document.addEventListener('DOMContentLoaded', function() {

    const els = document.querySelectorAll('.animate-title');
    const cb = function(entries, observer) {
        // alert('intersecting');
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const ta = new TweenTextAnimation(entry.target);
                ta.animate();
                observer.unobserve(entry.target);
            } else {
            }
        })
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    ,}

    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
});
