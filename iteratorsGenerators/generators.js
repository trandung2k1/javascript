function* generate() {
    console.log('One', '1');
    yield 1;
    console.log('Two', '2');
    yield 2;
}
let gen = generate();
// console.log(gen.next()); //{ value: 1, done: false }
// console.log(gen.next()); //{ value: 2, done: false }
// console.log(gen.next()); //{ value: undefined, done: true }

for (const iterator of gen) {
    // console.log(iterator);
}

function* forever() {
    let index = 0;
    while (true) {
        yield ++index;
    }
}

let f = forever();
// console.log(f.next()); //{ value: 1, done: false }
// console.log(f.next()); //{ value: 2, done: false }
// console.log(f.next()); //{ value: 3, done: false }
// console.log(f.next()); //{ value: 4, done: false }

function* bar() {
    yield;
}
const b = bar();
// console.log(b.next()); //{ value: undefined, done: false }
// console.log(b.next()); //{ value: undefined, done: true }

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let arr = [...generateSequence()];
console.log(arr); //[ 1, 2, 3 ]

// Passing a value to the next() method
function* gens() {
    let ask1 = yield '2 + 2 = ?';

    console.log(ask1); // 4

    let ask2 = yield '3 * 3 = ?';

    console.log(ask2); // 9
}

let generator = gens();

console.log(generator.next().value); // "2 + 2 = ?"

console.log(generator.next(4).value); // "3 * 3 = ?"

console.log(generator.next(9).done); // true
