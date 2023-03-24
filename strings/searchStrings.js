let text = "Please locate where 'locate' occurs!";
console.log(text.indexOf('locate', 0)); //7 if not exists return -1

console.log(text.lastIndexOf('locate')); //21

//Search using regular
console.log(text.search('locate')); //7
console.log(text.search('haha')); //-1
console.log(text.search(/locate/)); //7

//Match
let t = 'The rain in SPAIN stays mainly in the plain';
console.log(t.match('ain'));
// /[
//   'ain',
//   index: 5,
//   input: 'The rain in SPAIN stays mainly in the plain',
//   groups: undefined
// ]

// console.log(t.match(/ain/));
console.log(t.match(/ain/g)); //[ 'ain', 'ain', 'ain' ]
console.log(t.match(/ain/gi)); //[ 'ain', 'AIN', 'ain', 'ain' ]

//MatchAll
let str = 'I love cats. Cats are very easy to love. Cats are very popular.';
const iterator = str.matchAll(/Cats/gi);
console.log(Array.from(iterator)); //
// [
//   [
//     'cats',
//     index: 7,
//     input: 'I love cats. Cats are very easy to love. Cats are very popular.',
//     groups: undefined
//   ],
//   [
//     'Cats',
//     index: 13,
//     input: 'I love cats. Cats are very easy to love. Cats are very popular.',
//     groups: undefined
//   ],
//   [
//     'Cats',
//     index: 41,
//     input: 'I love cats. Cats are very easy to love. Cats are very popular.',
//     groups: undefined
//   ]
// ]

//Includes
console.log(str.includes('I')); //true
console.log(str.includes('Haha')); //false

//startWith, endWith

console.log(str.startsWith('I')); //true
console.log(str.endsWith('.')); //true
