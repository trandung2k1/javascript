//toString()

const fruits = ['Banana', 'Apple', 'Orange'];
console.log(fruits.toString()); //Banana,Apple,Orange

console.log(fruits.join(' * ')); //Banana * Apple * Orange

//POP
const pop = fruits.pop();
console.log(pop); //Orange
console.log(fruits); //[ 'Banana', 'Apple' ]

//PUSH

const length = fruits.push('Strawberry', 'Wiki');
console.log(fruits); //[ 'Banana', 'Apple', 'Strawberry', 'Wiki' ]
console.log(length); //4

//SHIFT

const shift = fruits.shift();
console.log(shift); //Banana
console.log(fruits); //[ 'Apple', 'Strawberry', 'Wiki' ]

//UNSHIFT

const unshift = fruits.unshift('Mango', 'Grape');
console.log(fruits); // [ 'Mango', 'Grape', 'Apple', 'Strawberry', 'Wiki' ]
console.log(unshift); //5

//LENGTH
console.log(fruits.length); //5

delete fruits[0];

console.log(fruits); // [ <1 empty item>, 'Grape', 'Apple', 'Strawberry', 'Wiki' ]

//CONCAT -> create new array
const myGirls = ['Mai', 'Lan'];
const myBoys = ['John', 'Nam'];
const myChildren = myGirls.concat(myBoys, ['Long']);
console.log(myChildren); //[ 'Mai', 'Lan', 'John', 'Nam', 'Long' ]

//FLAT

const myArray = [[1, 2], 3, [4, 5]];
console.log(myArray.flat()); //[ 1, 2, 3, 4, 5 ]

//SPLICE -> return array  item delete and change array old

const nums = [1, 2, 3, 4, 5];
const itemsDelete = nums.splice(0, 3);
console.log(itemsDelete); //[ 1, 2, 3 ]
console.log(nums); //[ 4, 5 ]

const inserts = nums.splice(0, 0, 7, 8, 9); //
console.log(nums); //[ 7, 8, 9, 4, 5 ]
console.log(inserts); //[]

const dt = nums.splice(1);
console.log(dt); //[ 8, 9, 4, 5 ]
console.log(nums); //[7]

//SLICE: create a new, not changed array old
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = data.slice(3);
console.log(num); //[ 4, 5, 6, 7, 8, 9 ]
console.log(data);
//[
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

const item = data.slice(1, 2);
console.log(item); //[ 2 ]
