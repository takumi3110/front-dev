
class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll('.tween-animate-title');
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        this._init();
    }
    _init() {
        const callBack = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.cb(entry.target, true);
                    if (this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        };
        this.io = new IntersectionObserver(callBack.bind(this), this.options);
        this.io.POLL_INTERVAL = 100;
        this.els.forEach(el => this.io.observe(el));
    }

    destroy() {
        this.io.disconnect();
    }
}
