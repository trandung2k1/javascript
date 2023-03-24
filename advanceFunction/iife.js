const rs = (function (a, b) {
    return a + b;
})(1, 2);
console.log(rs); //3

//fix overrides
const calculator = (function () {
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }
    return {
        add: add,
        multiply: multiply,
    };
})();
console.log(calculator.add(1, 2)); //3
console.log(calculator.multiply(2, 3)); //6

(() => {
    console.log('Hello world!');
})();
