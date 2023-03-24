async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await res.json();
    return data;
}

// function sayHi() {
//     return Promise.resolve('Hi');
// }

// async function sayHi() {
//     return 'Hi';
// }
async function sayHi() {
    return Promise.reject('Error Hi');
}
// let sayHi = async () => 'Hi';

// let sayHi = async function () {
//     return 'Hi';
// };

// sayHi().then((data) => console.log(data));

// getUser().then((user) => console.log(user));

// const app = async () => {
//     const data = await getUser();
//     const hi = await sayHi();
//     console.log(hi); // Hi
//     console.log(data);
// };

//handle error
const app = async () => {
    try {
        const data = await getUser();
        const hi = await sayHi();
        console.log(hi); // Hi
        console.log(data);
    } catch (error) {
        console.log(error); //Error Hi
    }
};
app();
