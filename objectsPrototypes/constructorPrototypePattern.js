//ES5
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};
let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Doe');
console.log(p1.getFullName()); //John Doe
console.log(p2.getFullName()); //Jane Doe

//ES6
class Pr {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let p3 = new Pr('John', 'Doe');
let p4 = new Pr('Jane', 'Doe');

console.log(p3.getFullName()); // John Doe
console.log(p4.getFullName()); // Jane Doe

Pr.prototype.getFirstName = function () {
    return this.firstName;
};
console.log(p3.getFirstName()); //John
console.log(p4.getFirstName()); //Jane
