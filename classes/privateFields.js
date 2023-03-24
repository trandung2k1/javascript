class Circle {
    #radius;
    static #count = 0;
    constructor(value) {
        this.#radius = value;
        // this.constructor.#count++;
        Circle.#count++;
    }
    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }
    get getCount() {
        return Circle.#count;
    }
}

let circle = new Circle(10);
console.log(circle.area); //314.1592653589793
console.log(circle.getCount); //1

// console.log(Circle.#count); //error

class Cylinder extends Circle {
    #height;
    constructor(radius, height) {
        super(radius);
        this.#height = height;
    }
}
console.log(Cylinder.#count); // Private field '#count' must be declared in an enclosing class
