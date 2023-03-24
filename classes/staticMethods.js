function Person(name) {
    this.name = name;
}
Person.hello = function () {
    console.log('Hello');
};
Person.hello(); //Hello
const pr = new Person('Mai');
pr.constructor.hello(); //Hello

class Pr {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        console.log('hello');
    }
}

Pr.hello(); //hello
const person = new Pr('Mai');
person.constructor.hello(); //hello
