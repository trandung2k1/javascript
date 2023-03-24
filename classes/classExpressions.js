let Person = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
};

const pr = new Person('Ha');

function createPerson(Person) {
    return new Person();
}

const person = createPerson(Person);
person.name = 'Anh';
console.log(person); //Person { name: 'Anh' }

let greeting = createPerson(
    class {
        sayHi() {
            console.log('Hello');
        }
    },
);
greeting.sayHi(); //Hello

//Singleton

let app = new (class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}`);
    }
})('Hehe');

app.start(); //Starting the Hehe
