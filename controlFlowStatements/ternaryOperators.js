let age = 18;
let message;
age >= 16 ? (message = 'You can drive') : (message = 'You can not drive');
console.log(message); //You can drive

// or

message = age >= 16 ? 'You can drive' : 'You can not drive';

//Example

let locked = 1;
let canChange = locked != 1 ? true : false;
console.log(canChange); //false

//Shorthand

canChange = locked != 1;
console.log(canChange); //false

//Multiple ternary operators
let speed = 90;
let msg = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'Oke';
console.log(msg); // Fast
