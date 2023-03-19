// Primitive type: null, undefined, boolean, number, string, symbol, bigint
// Complex data type: object
//! -> JS dynamic type
let counter = 1; //-> counter is number
counter = false; //-> counter is boolean
counter = 'foo'; //-> counter is now a string

//check type variable
let str = 'foo';
console.log(typeof str); //string
console.log(typeof 1); // number
console.log(typeof true); // boolean

let c;
console.log(c); // undefined
console.log(typeof c); // undefined

//variable that hasn’t been declared
console.log(typeof e); // undefined

//null
let obj = null;
console.log(obj); // null
console.log(typeof obj); // object
console.log(null == undefined); // true

//number: 64 bit float point
let num = 100;
//float point
let f = 1.3;
let d = 1.35;
// less memory
let price = 200.0; // -> auto convert equal 200
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_VALUE + Number.MAX_VALUE); //Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); //-Infinity

//NaN: Not a Number
console.log(1 / 'a'); // NaN
// Note: NaN exists -> NaN
console.log(NaN / 2); //NaN
console.log(NaN == NaN); //false

//string
let greeting = 'hello'; //
let msg = "Bye'ss";

console.log(greeting); //hello
console.log(msg); //Bye'ss

//template string

let s = `Hello ${greeting}`;
console.log(s); //Hello hello

//comparing strings
console.log('a' < 'b'); //true
console.log('10' < '2'); //true
console.log('1' < '2'); //true

// s.toString(). s.length

// not working
msg[0] = '1';
console.log(msg); //Bye'ss

//boolean

let isLogin = false;
console.log(isLogin); //false
console.log(typeof isLogin); //boolean

// !Note
// Convert equal true: non-empty string, non-zero and Infinity, non-null object
// Convert equal true: empty string, 0, NaN, null, undefined

//Symbol

let s1 = Symbol('hi');
let s2 = Symbol('hi');
console.log(s1);
console.log(s2);
console.log(typeof s1); //symbol
console.log(s1 == s2); //false
console.log(s1 === s2); //false

//bigint > 2^53 - 1
let pageView = 9007199254740991n;
console.log(typeof pageView); // 'bigint'

//object
let firsObject = {};
let contact = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
    },
};

//access property object

console.log(contact.firstName); //John
console.log(contact['firstName']); //John
console.log(contact['address']['city']); //San Jose
console.log(contact.address.street); //North 1st street

// property that does not exist -> undefined
//changed value
contact.firstName = 'Dung';
//add property
contact.age = 21;
//delete property
delete contact.lastName;

// check if a property exists in an object

console.log('firstName' in contact); //true
