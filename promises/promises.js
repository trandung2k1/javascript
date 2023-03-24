// function getUsers() {
//     return [
//         { username: 'john', email: 'johndoe@gmail.com' },
//         { username: 'janet', email: 'janedoe@gmail.com' },
//     ];
// }

// //synchronous and blocking
// function findUser(username) {
//     const users = getUsers();
//     const user = users.find((user) => user.username === username);
//     return user;
// }
// console.log(findUser('john')); //{ username: 'john', email: 'johndoe@gmail.com' }

// function getUsers() {
//     let users = [];
//     setTimeout(() => {
//         users = [
//             { username: 'john', email: 'johndoe@gmail.com' },
//             { username: 'janet', email: 'janedoe@gmail.com' },
//         ];
//     }, 1000);
//     return users;
// }

// function findUser(username) {
//     const users = getUsers(); // A
//     const user = users.find((user) => user.username === username); // B
//     return user;
// }

// console.log(findUser('john')); // undefined

//Fix

// function getUsers(callback) {
//     setTimeout(() => {
//         callback([
//             { username: 'john', email: 'johndoe@gmail.com' },
//             { username: 'janet', email: 'janedoe@gmail.com' },
//         ]);
//     }, 1000);
// }

// function getUser(username) {
//     getUsers((users) => {
//         const user = users.find((user) => user.username === username);
//         console.log(user);
//     });
// }

// getUser('john'); //{ username: 'john', email: 'johndoe@gmail.com' }

//Promise
// promise.then(onFulfilled, onRejected);
function getUsers() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve([
                { username: 'john', email: 'johndoe@gmail.com' },
                { username: 'janet', email: 'janedoe@gmail.com' },
            ]);
        }, 1000);
    });
}

function onFulfilled(users) {
    console.log(users);
}
const p = getUsers();
// p.then(onFulfilled);

//Using  arrow function
p.then((data) => console.log(data));
