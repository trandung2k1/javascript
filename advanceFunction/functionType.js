function add(a, b) {
    if (new.target) {
        throw 'The add function cannot be called as a constructor';
    }
    return a + b;
}
console.log(add.length); //2
console.log(add.prototype); //Object
const rs = add(1, 2);
console.log(rs); //3
// let obj = new add(1, 2); //error
// console.log(obj); //add{}

//call, apply
let cat = { type: 'Cat', sound: 'Meow' };
let dog = { type: 'Dog', sound: 'Woof' };

const say = function (msg) {
    console.log(msg);
    console.log(this.type + ' says ' + this.sound);
};

say.apply(cat, ['What does a cat say?']);
say.apply(dog, ['What does a dog say?']);

say.call(cat, 'What does a cat say?');
say.call(dog, 'What does a dog say?');

//bind

let car = {
    speed: 5,
    start: function () {
        console.log('Start with ' + this.speed + ' km/h');
    },
};

let aircraft = {
    speed: 10,
    fly: function () {
        console.log('Flying');
    },
};

let taxiing = car.start.bind(aircraft);
taxiing(); //Start with 10 km/h

car.start.call(aircraft); //Start with 10 km/h
car.start.apply(aircraft); //Start with 10 km/h
