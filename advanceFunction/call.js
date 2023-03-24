function add(a, b) {
    return a + b;
}
console.log(add instanceof Function); //true
const rs = add.call(null, 1, 2);
console.log(rs);

var greeting = 'Hi';
var msg = {
    greeting: 'Hello',
};

function say(msg) {
    console.log(this.greeting + ' ' + msg);
}
//Browser
say.call(this, 'Nam'); //Hi Nam

//Browser and nodejs
say.call(msg, 'Mai'); //Hello Mai

//Example
function Box(height, width) {
    this.height = height;
    this.width = width;
}

function Widget(height, width, color) {
    Box.call(this, height, width);
    this.color = color;
}

let widget = new Widget('red', 100, 200);

console.log(widget); //Widget { height: 'red', width: 100, color: 200 }

//use arguments
function isOdd(number) {
    return number % 2;
}
function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
}
let result = getOddNumbers(1, 2, 3, 4);
console.log(result); //[1, 3]
