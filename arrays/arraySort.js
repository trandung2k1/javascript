//SORT: default increasing
const fruits = ['Banana', 'Apple', 'Mango'];
console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Mango' ]

//Reverse array
console.log(fruits.reverse()); // [ 'Mango', 'Banana', 'Apple' ]

//SORT number

const numbers = [1, 3, 4, 5, 7, 6];
// console.log(numbers.sort()); //[ 1, 3, 4, 5, 6, 7 ]

//increase number
numbers.sort((a, b) => a - b);
console.log(numbers);

//decrease number

numbers.sort((a, b) => b - a);
console.log(numbers); //[ 7, 6, 5, 4, 3, 1 ]

//Sort random

numbers.sort(() => 0.5 - Math.random());
console.log(numbers);

//Min, max

console.log(Math.max(1, 2)); //2

console.log(Math.min(1, 2)); //1

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);
console.log(max, min); //7, 1

//SORT Object

const cars = [
    { type: 'Volvo', year: 2016 },
    { type: 'Saab', year: 2001 },
    { type: 'BMW', year: 2010 },
];
cars.sort((a, b) => b.year - a.year);
console.log(cars);
// [
//     { type: 'Volvo', year: 2016 },
//     { type: 'BMW', year: 2010 },
//     { type: 'Saab', year: 2001 },
// ];
