let propName = 'c';
const rank = {
    a: 1,
    b: 2,
    [propName]: 3,
};
console.log(rank.c); //3
console.log(rank[propName]); //3
let name = 'fullName';
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get [name]() {
        return this.firstName + ' ' + this.lastName;
    }
}
const person = new Person('Tran', 'Dung');
console.log(person.fullName); //Tran Dung
console.log(person[name]); //Tran Dung
