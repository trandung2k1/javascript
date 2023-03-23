let counter = {
    count: 0,
    next: function () {
        return ++this.count;
    },
};

console.log(counter.next()); //1 -> this = counter

//global context
// web browse = window object
// nodejs = global
console.log(this);

// this.red = "Red",
// console.log(window.red) //

//Function context
function show() {
    'use strict';
    console.log(this); // undefined
}
show();

let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    },
};

console.log(car.getBrand()); //this = car

let brand = car.getBrand; // not this
console.log(brand()); //undefined
//fix
let br = car.getBrand.bind(car);
console.log(br()); //Honda

let brandName = car.getBrand.call(car);
console.log(brandName); // Honda

let brandName2 = car.getBrand.apply(car);
console.log(brandName2); //Honda

function getBrand(prefix) {
    console.log(prefix + this.brand);
}

const honda = {
    brand: 'Honda',
};

getBrand.call(honda, 'It is '); // It is a Honda

getBrand.apply(honda, ['It is ']); // It is a Honda

const useBin = getBrand.bind(honda);

useBin('Xin chao '); //Xin chao Honda

//Arrow function do not have this
