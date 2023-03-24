//Description < ES6
//Person  prototypal inheritance  Object
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};
const john = new Person('John Doe');
console.log(john.getName()); //John Doe
console.log(john.__proto__); //{ getName: [Function (anonymous)] }
console.log(john.__proto__ === Person.prototype); //true

console.log(john.getName()); //John
console.log(Person.prototype.constructor === Person); //true
console.log(typeof Person); //function
console.log(john instanceof Person); //true
console.log(john instanceof Object); //true
const obj = {
    name: 'John',
};
console.log(obj.__proto__); //[Object: null prototype] {}

//prototypal inheritance:
//Date -> Date.prototype
//Array -> Array.prototype
//=> inheritance: Object.prototype

//ES6
class Pr {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const pr = new Pr('Nam');
console.log(pr.getName()); //Nam
console.log(typeof Pr); //function
console.log(pr instanceof Pr); //true
console.log(pr instanceof Object); //true

//class not hoisting
