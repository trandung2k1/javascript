function Animal(legs) {
    this.legs = legs;
}
Animal.prototype.walk = function () {
    console.log('Walking on ' + this.legs + ' legs');
};

function Bird(legs, name) {
    Animal.call(this, legs);
    this.name = name;
}
Object.setPrototypeOf(Bird.prototype, Animal.prototype);

// Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.fly = function () {
    console.log('flying');
};
var pigeon = new Bird(2, 'Pigeon');
console.log(pigeon);
console.log(pigeon.legs);
pigeon.walk();
pigeon.fly();

//ES6: Shadowing methods

class Animal1 {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
    static helloWorld() {
        console.log('Hello World');
    }
}

class Bird1 extends Animal1 {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
    walk() {
        super.walk();
        console.log(`go walking`);
    }
}

let bird = new Bird1(2);
bird.fly(); //flying
bird.walk(); //walking on 2 legs go walking

Bird1.helloWorld(); //Hello World

//Example
class Queue extends Array {
    enqueue(e) {
        super.push(e);
    }
    dequeue() {
        return super.shift();
    }
    peek() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

const customers = new Queue();
customers.enqueue('A');
customers.enqueue('B');
customers.enqueue('C');

while (!customers.empty()) {
    console.log(customers.dequeue());
}
