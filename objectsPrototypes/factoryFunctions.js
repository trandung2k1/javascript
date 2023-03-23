function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName() {
            return firstName + ' ' + lastName;
        },
    };
}

const p1 = createPerson('Tran', 'Dung');
console.log(p1.getFullName()); //Tran Dung
const p2 = createPerson('Nam', 'Nguyen');
console.log(p2.getFullName()); //Nam Nguyen

//Refactor
function createPr(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
    };
}

const actions = {
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};
const p3 = createPr('Mai', 'Pham');
p3.getFullName = actions.getFullName;
console.log(p3.getFullName()); // Mai Pham

//Object create
function createPerson1(firstName, lastName) {
    let person = Object.create(actions);
    person.firstName = firstName;
    person.lastName = lastName;
    return person;
}

const person = createPerson1('Hoai', 'Pham');
console.log(person.getFullName()); // Hoai Pham
