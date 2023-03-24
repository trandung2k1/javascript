const fullName = 'Tran Van A';
//Substr
console.log(fullName.substr(1)); //ran Van A
console.log(fullName.substr(-3)); //n A-> right -> left
console.log(fullName.substr(5)); //Van A

//replace: create new string, replace only the first match, use regular
let text = 'Please visit Microsoft!';
let newText = text.replace('Microsoft', 'Google');
console.log(newText); //Please visit Google!

let str = 'Please visit Microsoft and mIcrosoft';

console.log(str.replace(/MICROSOFT/gi, 'microsoft')); //Please visit microsoft and microsoft
//i: uppercase or lowercase, g: global

//ReplaceAll
let t = 'I love cats. Cats are very easy to love. Cats are very popular';

t = t.replaceAll(/Cats/g, 'Dogs');
console.log(t); //I love cats. Dogs are very easy to love. Dogs are very popular
t = t.replaceAll(/cats/g, 'dogs');
console.log(t); //I love dogs. Dogs are very easy to love. Dogs are very popular

//toUpperCase, toLowerCase, concat, trim, trimStart, trimEnd

//padStart, padEnd
let a = '5';
console.log(a.padStart(3, 'x')); //xx5
console.log(a.padEnd(3, 'x')); //5xx

let msg = 'HELLO';
console.log(msg.charAt(0)); //H

console.log(msg.charCodeAt(0)); //72
//change value
msg[0] = 'h'; // not working
console.log(msg); //HELLO
const fruits = 'Banana, Apple, Mango';
console.log(fruits.split(',')); //[ 'Banana', ' Apple', ' Mango' ]
