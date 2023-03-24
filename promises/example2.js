let success = false;

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    { username: 'john', email: 'john@test.com' },
                    { username: 'jane', email: 'jane@test.com' },
                ]);
            } else {
                reject('Failed to the user list');
            }
        }, 1000);
    });
}

function onFulfilled(users) {
    console.log(users);
}
function onRejected(error) {
    console.log(error);
}

const promise = getUsers();
// promise.then(onFulfilled, onRejected);

// promise.then(
//     (users) => console.log(users),
//     (error) => console.log(error),
// );

//promise.catch(onRejected);
promise.catch((error) => {
    console.log(error);
});

promise
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Finally'   );
    });
