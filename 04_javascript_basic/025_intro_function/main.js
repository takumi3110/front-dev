const hello2 = function(name, age) {
    // let name = 'Watame';
    console.log('hello ' + name + age);
    return name + age
}

// 無名関数 callback関数
function hello(name, age) {
    // let name = 'Watame';
    console.log('hello ' + name + age);
    return name + age
}

hello('Watame', 10);
const returnVal = hello('Botan', 10);
console.log(returnVal);

hello2('noel', 20)