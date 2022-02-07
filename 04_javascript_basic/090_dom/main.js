const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
/*
btn.addEventListener('click', function() {
    alert('hello');
});

 */
const hello = function() {
    //alert('hello');
    this.style.color = 'red';
    console.log(this);
};

function changeColor() {
    h1.style.color = 'red';
}

function changeBackgroundColor() {
    h1.style.backgroundColor = 'green';
}

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBackgroundColor);
// btn.removeEventListener('click', changeColor);

