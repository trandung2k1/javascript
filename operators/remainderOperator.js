let remainder = 5 % -2;

console.log(remainder); //-1

remainder = 5 % 2;

console.log(remainder); // 1

remainder = -5 % 3;

console.log(remainder); // -2

remainder = -5 % -3;

console.log(remainder); // -2

remainder = Infinity % 2;

console.log(remainder); // NaN

remainder = 10 % 0;

console.log(remainder); //NaN

console.log(Infinity % Infinity); //NaN

console.log(Infinity / Infinity); //NaN

console.log(10 % Infinity); // 10

console.log(0 % 10); // 10

console.log(Infinity / 10);

console.log('10' % 3); //1

//check odd number

const num = 13;
let isOdd = num % 2;
console.log(Boolean(isOdd)); // true
//function

function isOddO(num) {
    return num % 2;
}

console.log(Boolean(isOddO(10))); // false

//Arrow function
const isOddT = (num) => num % 2;

// % not modulo
// !modulo javascript: ((dividend % divisor) + divisor) % divisor
// ? Example: 5, 3
// todo: ((5 % 3) + 3) % 3 = 2

//function modulo(a, b)
const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;
