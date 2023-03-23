let person = {
    firstName: 'John',
    lastName: 'Doe',
};

person.greet1 = function () {
    console.log('Hello');
};
person.greet1();

const greet2 = function () {
    console.log('Hi');
};
person.greet2 = greet2;
person.greet2();

function greet3() {
    console.log('Hello everyone');
}

person.greet3 = greet3;
person.greet3();

//Shorthand
person = {
    firstName: 'Tran',
    lastName: 'Dung',
    greet: function () {
        console.log('Okay');
    },
};
person.greet();

//ES 6
person = {
    firstName: 'Tran',
    lastName: 'Dung',
    greet() {
        console.log('Hehe');
    },
};
person.greet();

// this
const student = {
    firstName: 'Tran',
    lastName: 'Dung',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};
console.log(student.getFullName()); // this = student
