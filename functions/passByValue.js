// primitives values
function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);
console.log(result); //100
console.log(y); //10
// reference values

let person = {
    name: 'John',
    age: 25,
};

function increaseAge(person) {
    person.age += 1;
}

increaseAge(person);

console.log(person.age); //26

const student = {
    age: 10,
    name: 'Dung',
};

function createStudent(st) {
    // st = JSON.parse(JSON.stringify(st));
    // st.name = 'Mai';

    //spread
    st = { ...st, name: 'Mai' };
    return st;
}

const newSt = createStudent(student);
console.log(student); //5
console.log(newSt); //
