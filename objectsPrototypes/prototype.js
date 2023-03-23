function Person(firstName, lastName) {
    // console.log(new.target)
    if (!new.target) {
        throw Error('Cannot be called without the new keyword');
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
}

const person = new Person('Tran', 'Dung');

console.log(person);
// Person {
//   firstName: 'Tran',
//   lastName: 'Dung',
//   getFullName: [Function (anonymous)]
// }

console.log(person instanceof Person); // true

console.log(person.getFullName()); //Tran Dung

// const pr = Person("Tran", "Mai") //Cannot be called without the new keyword

console.log(typeof Object); // function
console.log(Person.prototype.constructor === Person); // true
// console.log(Person.prototype);
Person.prototype.getFirstName = function () {
    return this.firstName;
};

console.log(person.getFirstName()); // Tran

person.getLastName = function () {
    return this.lastName;
};

const pr = new Person('Tran', 'Nam');

// console.log(pr.getLastName()) // getLastName is not a function

console.log(pr.__proto__); //{ getFirstName: [Function (anonymous)] }
console.log(Person.prototype); //{ getFirstName: [Function (anonymous)] }

//  => pr.__proto__ === Person.prototype // references the Person.prototype object.
// pr.__proto__ === person.__proto__

//ES6
console.log(Object.getPrototypeOf(pr)); //{ getFirstName: [Function (anonymous)] }

console.log(pr.constructor.prototype); //{ getFirstName: [Function (anonymous)] }
