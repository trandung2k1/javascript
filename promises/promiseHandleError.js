let authorized = false;
function getUserById(id) {
    // if (typeof id !== 'number' || id <= 0) {
    //     throw new Error('Invalid id argument');
    // }
    return new Promise((resolve, reject) => {
        if (!authorized) {
            throw new Error('Unauthorized access to the user data');
        }
        resolve({
            id,
            username: 'admin',
        });
    });
}

try {
    getUserById('a')
        .then((user) => console.log(user.username))
        .catch((err) => console.log('Reject', err)); //Reject Error: Unauthorized access to the user data
} catch (error) {
    console.log('Error outside', error); //Error outside Error: Invalid id argument
}

//catch of promise: Throwing an error or reject
