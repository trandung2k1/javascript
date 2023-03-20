let r1 = 20 > 10; // true
let r2 = 20 < 10; // false
let r3 = 10 == 10; // true

let name1 = 'alice',
    name2 = 'bob';
// ? a = 97, b = 98
let res = name1 < name2;
console.log(res); // true
// string -> compares the character

let f1 = 'apple';
let f2 = 'Banana';
// B = 66, a = 97
console.log(f2 < f1); // true

console.log(f2.toLowerCase() < f1.toLowerCase()); // false

console.log(10 < '20'); // true -> convert '20' =  20

console.log(10 == '10'); // true -> convert '10' = 10

let apple = {
    valueOf: function () {
        return 10;
    },
};
// -> apple = 10
let orange = {
    toString: function () {
        return '20';
    },
};
// -> orange = '20'

//! valueOf more priority toString
console.log(apple > 10); // false(10 > 10)

console.log(orange == 20); // true(20 == 20), orange = '20' -> convert = 20

console.log(null == undefined); // true
console.log(NaN == 1); // false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

//Strict equal

// === comparison type and value
// == comparison value
