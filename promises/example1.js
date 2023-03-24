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
p.then(onFulfilled);
p.then((data) => console.log(data));
