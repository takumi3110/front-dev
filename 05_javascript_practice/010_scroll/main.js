const child = document.querySelector('.child');
const cb = function(entries, observer) {
    // alert('intersecting');
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('inview');
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);
        } else {
            console.log('out view');
            entry.target.classList.remove('inview');
        }
    })
}
const options = {
    root: null,
    rootMargin: "-300px 0px",
    threshold: 0
,}

const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2)