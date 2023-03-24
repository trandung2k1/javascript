class Person {
    constructor(firstName, lastName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let args = ['John', 'Doe'];
let john = Reflect.construct(Person, args);
console.log(john); //Person { lastName: 'Doe', firstName: 'John' }
console.log(john instanceof Person); //true

//

let result = Function.prototype.apply.call(Math.max, Math, [10, 20, 30]);
console.log(result); //30

let rs = Reflect.apply(Math.max, Math, [10, 20, 30]);
console.log(rs); //30

//Define: Reflect.apply(target, thisArg, args)

const user = {
    name: 'Tran Van Dung',
};

Reflect.defineProperty(user, 'age', {
    writable: true,
    value: 21,
    enumerable: true,
    configurable: true,
});

console.log(user); //{ name: 'Tran Van Dung', age: 21 }
