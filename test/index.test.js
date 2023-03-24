const test = require('node:test');
const assert = require('assert/strict');
const { add, subtract, multiply, divide, power } = require('.');
test('add', () => {
    assert.equal(add(1, 2), 3);
});
test('subtract', () => {
    assert.equal(subtract(1, 2), -1);
});
test('multiply', () => {
    assert.equal(multiply(1, 2), 2);
});
test('divide', () => {
    assert.equal(divide(1, 2), 0.5);
});
test('power', () => {
    assert.equal(power(2, 2), 4);
});
