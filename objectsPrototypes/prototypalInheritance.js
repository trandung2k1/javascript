const person = {
    name: 'John',
    greet: function () {
        return "Hi, I'm " + this.name;
    },
};

const teacher = {
    teach: function (subject) {
        return 'I can teach ' + subject;
    },
};

console.log(person.__proto__);
teacher.__proto__ = person;
console.log(teacher.name); //John
console.log(teacher.teach('C')); //I can teach C

const tc = Object.create(person, {
    name: {
        value: 'Teacher',
    },
    teach: {
        value: function (subject) {
            return 'I can teach ' + subject;
        },
    },
});
console.log(tc.name);
console.log(tc.teach('C++')); ///I can teach C++
