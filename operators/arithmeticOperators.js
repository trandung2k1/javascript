// +, -, *, /
//Addition operator
let sum = 10 + 20;
console.log(sum); //30

let netPrice = 9.99,
    shippingFee = 1.99;

let grossPrice = netPrice + shippingFee;

console.log(grossPrice); //11.98

//Note: let x = '10', y = '20'
// let result = x + y;
// console.log(result); //1020
//let rs = 10 + '20'
//console.log(rs); //1020

//Subtraction operator

let result = 30 - 10;
console.log(result); //20
console.log(Infinity + Infinity); //

//Multiplication operator
let rs = 2 * 3;
console.log(rs); //6

console.log(2 * '3'); //6

//Divide operator

let div = 20 / 10;
console.log(div); // 2
console.log('20' / 2); //10

let energy = {
    valueOf() {
        return 100;
    },
};
// console.log(energy.valueOf()); //100

let currentEnergy = energy - 1;
console.log(currentEnergy); // 99

//If the object doesn’t have the valueOf() method but has the toString() method

let energyOne = {
    toString() {
        return 50;
    },
};

let currentEnergyOne = energyOne + 1;
console.log(currentEnergyOne); // 51
