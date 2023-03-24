const numbers = [1, 2, 3, 4];
numbers.length = 100;
//0->3
// numbers.forEach((element, index, array) => {
//     console.log(element, index, array);
// });

//0 -> 99
// for (const item of numbers) {
//     console.log(item);
// }

// for (const key in numbers) {
//     console.log(numbers[key]);
// }

// Array.prototype.forEach2 = function (callback) {
//     for (const index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(index, this[index], this);
//         }
//     }
// };
// numbers.forEach2((num, index, array) => {
//     console.log(num, index, array);
// });

//map: create new array
Array.prototype.map2 = function (callback) {
    let output = [];
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (this[i] !== undefined) {
            const rs = callback(this[i], i, this);
            output.push(rs);
        } else {
            output.length = output.length + 1;
        }
    }
    return output;
};

const data = numbers.map2((number, index, currentArray) => {
    console.log(number, index, currentArray);
    return number;
});
console.log(data);
// const dt = numbers.map((item) => item);
// console.log(dt);

//filter: create new array

const n = [1, 2, 3, 4, 5, 6, 1, 8];

const rs = n.filter((item) => item != 1);
console.log(rs);
// [2, 3, 4, 5, 6, 7, 8];

//reduce: left -> right

const total = n.reduce((prev, currentValue) => prev + currentValue);
console.log(total); //36

//reduceRight: right -> left

const tt = n.reduceRight((prev, currentValue) => prev + currentValue);
console.log(tt); //36

let allOver3 = numbers.every((item) => item > 3);
console.log(allOver3); //false

let someOver2 = numbers.some((item) => item > 2);
console.log(someOver2); //true

//indexOf

console.log(n.indexOf(1)); // 0
console.log(n.indexOf(1, 10)); // -1

console.log(n.lastIndexOf(1)); //6

console.log(n.find((item) => item === 2)); //2

console.log(n.findIndex((item) => item > 2)); //2

console.log(Array.from('ABC')); //[ 'A', 'B', 'C' ]

console.log(Object.keys(n));
// ['0', '1', '2', '3', '4', '5', '6', '7'];

console.log(Object.entries(n));
// [
//     ['0', 1],
//     ['1', 2],
//     ['2', 3],
//     ['3', 4],
//     ['4', 5],
//     ['5', 6],
//     ['6', 1],
//     ['7', 8],
// ];

console.log(n.includes(1)); // true
console.log(n.includes(100)); // false
