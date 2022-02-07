/*
function hello(name = 'Tom') {
    console.log('hello ' + name);
}

 */
/*
const hello = function(name = 'Tom') {
    console.log('hello ' + name);
}

 */

// allow function
const hello = (name = 'Tom') => console.log('hello ' + name);

hello('takumi');
hello('takumi2');
hello();

const arry = [1, 2, 3, 4, 5];
/*
arry.forEach(function(value) {
    console.log(value);
});


 */

arry.forEach(value => console.log(value));