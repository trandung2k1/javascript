// let proxy = new Proxy(target, handler);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
};

const handler = {
    get(target, property) {
        console.log(`Proxy ${property} has been read`);
        return target[property];
    },
};

const p = new Proxy(user, handler);
// console.log(p);
console.log(p.firstName);
// Proxy firstName has been read
// John

console.log(p.lastName);
// Proxy lastName has been read
// Doe

user.firstName = 'Jane';
console.log(p.firstName);
// Proxy firstName has been read
// Jane

p.lastName = 'William';
console.log(user.lastName); //William
