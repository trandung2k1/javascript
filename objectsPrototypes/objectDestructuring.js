let person = {
    firstName: 'John',
    lastName: 'Doe',
};

// const first = person.firstName;
// const last = person.lastName;
// console.log(first + ' ' + last); //John Doe

// ES6

// const { firstName: fn, lastName: ln } = person;
// console.log(firstName); //Joh
// console.log(lastName); //Doe

// console.log(fn);
// console.log(ln);

//Shorthand
({ firstName, lastName } = person);
console.log(firstName); //John
console.log(lastName); //Doe

//Default value

const user = {
    first: 'John',
    last: 'Doe',
    currentAge: 28,
};

let { first, last, currentAge: age = 18, msg = 'Hello' } = user;
console.log(first); //John
console.log(last); //Doe
console.log(age); //28
console.log(msg); //Hello

//Issue

// function getPerson() {
//     return null;
// }

// let { name } = getPerson();
// console.log(name); //  Cannot destructure property 'name' of 'getPerson(...)' as it is null.

//Nested object destructuring
let employee = {
    id: 1001,
    name: {
        firstN: 'John',
        lastN: 'Doe',
    },
};

// const {
//     id,
//     name: { firstN, lastN },
// } = employee;
// console.log(firstN, lastN); //John Doe

const {
    id,
    name: { firstN, lastN },
    name,
} = employee;
console.log(name); //{ firstN: 'John', lastN: 'Doe' }

//Function

function display({ first, last }) {
    console.log(first + ' ' + last);
}
display(user); //John Doe
