function Person(name) {
    this.name = name;
}

// const dung = new Person('Dung');
// console.log(dung);
Person('Nam');

//Nodejs
console.log(globalThis.name); //Nam

//Browser
// console.log(window.name); //Name

function Pr(name) {
    if (!new.target) {
        throw 'Muts use new operator with Pr';
    }
    this.name = name;
}
// Pr('Lam'); //Error
const person = new Pr('Mai');
console.log(person);

class Person1 {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}
class Employee extends Person1 {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}
const joh = new Person1('John'); //Person1
const lily = new Employee('Lily Bush', 'Programer'); //Employee
// console.log(lily);
// console.log(joh);
