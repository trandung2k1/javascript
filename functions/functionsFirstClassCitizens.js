function add(a, b) {
    return a + b;
}

let sum = add;
console.log(add(10, 20)); // 30
let rs = sum(10, 20);
console.log(rs); // 30

function average(a, b, fn) {
    return fn(a, b) / 2;
}

const result = average(10, 20, sum);
console.log(result); //15

//function compare object

function compareBy(propertyName) {
    return function (a, b) {
        let x = a[propertyName];
        let y = b[propertyName];
        if (x > y) {
            return -1;
        } else if (x < y) {
            return 1;
        } else {
            return 0;
        }
    };
}
let products = [
    { name: 'iPhone', price: 900 },
    { name: 'Samsung Galaxy', price: 850 },
    { name: 'Sony Xperia', price: 700 },
];
products.sort(compareBy('price'));
console.table(products);

//Example

function cmToIn(length) {
    return length / 2.54;
}
function inToCm(length) {
    return length * 2.54;
}

function convert(fn, length) {
    return fn(length);
}

const inches = convert(cmToIn, 10);
console.log(inches); // 3.937007874015748

let cm = convert(inToCm, 10);
console.log(cm); // 25.4
