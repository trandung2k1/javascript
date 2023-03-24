function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}

//hi reference sayHi() inside greeting()
let hi = greeting();
hi(); // still can access the message variable

function greeting1(message) {
    return function (name) {
        return message + ' ' + name;
    };
}
let sayHi = greeting1('Hi');
let sayHello = greeting1('Hello');

console.log(sayHi('John')); // Hi John
console.log(sayHello('John')); // Hello John
//var global
// for (var index = 1; index <= 3; index++) {
//     (function (index) {
//         setTimeout(function () {
//             console.log('after ' + index + ' second(s):' + index);
//         }, index * 1000);
//     })(index);
// }

//using let: local
for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}
