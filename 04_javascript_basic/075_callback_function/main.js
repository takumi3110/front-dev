function hello(callback, lastname) {
    console.log('hello ' + callback(lastname));
}

function getName() {
    return 'takumi';
}
/*
hello(getName);

 */

hello(function(name) {
    return 'code' + name;
}, 'Mafia');

hello(() => 'code');

function dosomething(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

dosomething(2, 3, multiply);
dosomething(3, 2, plus);


arry = [1, 2, 3, 4, 5];

function forEach(ary, callback) {
    for (let i = 0; i < ary.length; i++) {
        callback(ary[i]);
    }
}

function log(val) {
    console.log(val);
}

function double(val) {
    val = val * 2;
    log(val);
}

//forEach(arry, log);
forEach(arry, double);
