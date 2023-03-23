const person = {
    name: 'Dung',
    age: 20,
    address: 'Ninh Binh',
};
console.log(person);

for (const key in person) {
    console.log(key, person[key]);
    //name Dung
    // age 20
    // address Ninh Binh
}

const decoration = {
    color: 'red',
};

const circle = Object.create(decoration);
circle.radius = 10;
console.log(circle); //{ radius: 10 }

for (const prop in circle) {
    console.log(prop);
    // radius
    // color
}

for (const key in circle) {
    if (circle.hasOwnProperty(key)) {
        console.log(key); //radius
    }
}

// Array
const nums = [1, 2, 3];
for (const key in nums) {
    console.log(nums[key]);
    // 1 2 3
}
// issus: add prototype
Array.prototype.a = 100;
let total = 0;
for (const key in nums) {
    total += nums[key];
}
console.log(total); //106

// fix issus
let t = 0;
for (const key in nums) {
    // if (nums.hasOwnProperty(key)) {
    //     t += nums[key];
    // }
    if (nums.hasOwnProperty.call(nums, key)) {
        t += nums[key];
    }
}
console.log(t); // 6

const numbers = [];
numbers[2] = 3;
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    // undefined
    // undefined
    // 3
}
for (const key in numbers) {
    if (numbers.hasOwnProperty(key)) {
        console.log(numbers[key]); // 3
    }
}
