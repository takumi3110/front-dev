const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log('hello');
    }
}

// console.log(obj.first_name);
// obj.printFullName();

class MyObj {
    constructor() {
        this.firs_tname = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log('hello');
    }
}

const obj2 = new MyObj();

obj2.printFullName();
