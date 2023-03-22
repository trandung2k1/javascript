//Examples

function add(a, b) {
    a = typeof a !== 'undefined' ? a : 1;
    b = typeof b !== 'undefined' ? b : 1;
    return a + b;
}

console.log(add(1, 2)); //3
console.log(add()); //2

function sum(a = 1, b = 1) {
    return a + b;
}

console.log(sum(1, 2)); //3
console.log(sum()); //2
