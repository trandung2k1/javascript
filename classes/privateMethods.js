class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        // this.#firstName = firstName;
        // this.#lastName = lastName;
        this.#firstName = Person.#validate(firstName);
        this.#lastName = Person.#validate(lastName);
    }

    #lastFirst() {
        return `${this.#lastName}, ${this.#firstName}`;
    }
    #firstLast() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }
    static #validate(name) {
        if (typeof name === 'string') {
            let str = name.trim();
            if (str.length === 3) {
                return str;
            }
        }
        throw 'The name must be a string with at least 3 characters';
    }
}

// let person = new Person('John', 'Doe');
// console.log(person.getFullName()); //John Doe
// let person = new Person('Jo', 'Doe'); // throw 'The name must be a string with at least 3 characters';
let p = new Person('Dun', 'Tra');
console.log(p.getFullName()); //Dun Tra
