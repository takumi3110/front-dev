document.addEventListener('DOMContentLoaded', function() {
    const el = document.querySelector('.animate-title');
    // console.log(el.innerHTML.trim());
    // const str = el.innerHTML.trim();
    const str = el.innerHTML.trim().split("");

    // let concatStr = ''
    /*
    for (let c of str) {
        // console.log(`<span class="char">${c}</span>`);
        c = c.replace(' ', '&nbsp;');
        concatStr += `<span class="char">${c}</span>`;
    }

     */

    // console.log(concatStr);
    // el.innerHTML = concatStr;
    el.innerHTML = str.reduce((acc, curr) => {
       curr = curr.replace(/\s+/, '&nbsp;');
       return `${acc}<span class="char">${curr}</span>`;
    }, "");
});
