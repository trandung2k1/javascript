const cars = ['BMW', 'Mercedes', 'Honda'];
console.log(cars); // [ 'BMW', 'Mercedes', 'Honda' ]
//Length
console.log(cars.length); // 3
//Change value
cars[0] = 'Toyota';
console.log(cars); //[ 'Toyota', 'Mercedes', 'Honda' ]

console.log(cars[0]); //Toyota
console.log(cars[cars.length - 1]); //Honda

const numbers = new Array(1, 2, 3);
console.log(numbers); //[ 1, 2, 3 ]

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (const car of cars) {
    console.log(car);
}

for (const key in cars) {
    if (cars.hasOwnProperty.call(cars, key)) {
        console.log(cars[key]);
    }
}

cars.forEach((car, index, currentArray) => {
    console.log(index + ' - ' + car);
    console.log(currentArray);
});

//push: add item -> return length/ cars[cars.length] = "Lexus"
console.log(cars.push('Lexus')); //4

const person = [];
person['firstName'] = 'John';
person['lastName'] = 'Doe';
person['age'] = 46;
console.log(person); //[ firstName: 'John', lastName: 'Doe', age: 46 ]
console.log(Array.isArray(person)); // true
console.log(person instanceof Array); // true
console.log(typeof person); //object
