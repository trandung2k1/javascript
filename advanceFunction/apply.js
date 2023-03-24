const person = {
    firstName: 'John',
    lastName: 'Doe',
};
function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}
let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(result); //Hello John. How are you?

const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        console.log(this);
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    },
};

const server = {
    name: 'Dell PowerEdge T30',
    isOn: false,
};

let rs = computer.turnOn.apply(server);

console.log(rs); //The Dell PowerEdge T30 is On, { name: 'Dell PowerEdge T30', isOn: true }

let arr = [1, 2, 3, 4];

let numbers = [5, 6, 7];
const l = arr.push.apply(arr, numbers);
console.log(arr);
//[
//   1, 2, 3, 4,
//   5, 6, 7
// ]
console.log(l); //7
