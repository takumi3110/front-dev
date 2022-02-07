const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        // console.log('hello');
        console.log(obj.first_name);
        window.setTimeout(function(fn) {
            console.log(this);
        });
    }
}

// const window = {
//     setTimeout: function(fn) {
//         fn();
//     }
// }

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
    }
}

const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();
