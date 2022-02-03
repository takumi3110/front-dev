document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title2');
    ta.animate();
    ta2.animate();
    btn.addEventListener('click', ta.animate.bind(ta));
    btn.addEventListener('click', function() {
        ta2.animate();
    });
});

class TextAnimation {
    constructor(el) {
        console.log(this);
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        // this.el.innerHTMl = this._splitText();
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}
