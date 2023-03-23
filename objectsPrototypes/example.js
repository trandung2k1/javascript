const person = {
    name: 'John',
    age: 21,
};
console.log(Object.keys(person)); //['name', 'age']
console.log(person.propertyIsEnumerable('age')); //true
Object.defineProperty(person, 'ssn', {
    value: '123-345-789',
    enumerable: true,
});
console.log(person.propertyIsEnumerable('ssn')); // enumerable: true => true, else false => false

console.log(person.hasOwnProperty('ssn')); // true

console.log(Object.values(person)); //[ 'John', 21, '123-345-789' ]
console.log(Object.entries(person)); //[ [ 'name', 'John' ], [ 'age', 21 ], [ 'ssn', '123-345-789' ] ]

const st = {
    className: 'KTPM02',
};
const dt = Object.assign({}, st, person);
console.log(dt); //{ className: 'KTPM02', name: 'John', age: 21, ssn: '123-345-789' }
Object.assign(st, person);
console.log(st); // { className: 'KTPM02', name: 'John', age: 21, ssn: '123-345-789' }
console.log(Object.is(1, 1));
