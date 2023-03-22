//Anonymous function not name

// (function (){})

let show = function () {
    console.log('Anonymous function');
};
show();

//Using anonymous functions as arguments

// setTimeout(function () {
//     console.log('Excute later after 1 second');
// }, 1000)

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

// for (var i = 0; i < 10; i++) {
//     (function (x) {
//         setTimeout(function () {
//             console.log(x);
//         }, 1000);
//     })(i);
// }

// IIFE
(function () {
    console.log('Hello world');
})();

let person = {
    firstName: 'Tran',
    lastName: 'Dung',
};
(function () {
    console.log(person.firstName + ' ' + person.lastName); //Tran Dung
})();

//ES6
const add = (a, b) => a + b;
show = () => console.log('Update anonymous function');
