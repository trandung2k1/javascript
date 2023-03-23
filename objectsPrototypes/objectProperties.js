// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
// }

let person = {};
// person.name = "Dung"
// delete person.name

Object.defineProperty(person, 'name', {
    value: 'Dung', // value
    configurable: true,
    // configurable: false, //not delete or redefine
    writable: true, //changed
    enumerable: true, //for ... in, if false console.log(person) = {}
});
console.log(person); // {name: "Dung"}
// delete person.name
console.log(person); // {name: "Dung"}

for (let property in person) {
    console.log(property); // name
}
console.log(person.name); // Dung

let student = {
    firstName: 'John',
    lastName: 'Doe',
};
Object.defineProperty(student, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    },
});
console.log(student.fullName); // Dung

student.fullName = 'Tran Dung';
console.log(student.fullName); //Tran Dung

//Define multiple properties

let dt = {};
Object.defineProperties(dt, {
    name: {
        value: 'Mai',
        enumerable: true,
    },
    age: {
        value: 21,
        enumerable: true,
    },
});
console.log(dt);

console.log(Object.getOwnPropertyDescriptor(dt, 'name'));
// {
//   value: 'Mai',
//   writable: false,
//   enumerable: true,
//   configurable: false
// }
console.log(Object.getOwnPropertyDescriptors(dt));
// {
//   name: {
//     value: 'Mai',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   age: { value: 21, writable: false, enumerable: true, configurable: false }
// }
console.log(Object.getOwnPropertyNames(dt)); //[ 'name', 'age' ]
console.log(Object.values(dt)); // [ 'Mai', 21 ]
console.log(Object.entries(dt)); // [ [ 'name', 'Mai' ], [ 'age', 21 ] ]