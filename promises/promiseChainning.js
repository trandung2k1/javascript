let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});

// p.then((result) => {
//     console.log(result); //10
//     return result * 2;
// })
//     .then((result) => {
//         console.log(result); //20
//         return result * 2;
//     })
//     .then((result) => {
//         console.log(result); //40
//     });

//

// p.then((result) => {
//     console.log(result);
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(result * 3);
//         }, 3 * 1000);
//     });
// })
//     .then((result) => {
//         console.log(result);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(result * 3);
//             }, 3 * 1000);
//         });
//     })
//     .then((result) => {
//         console.log(result);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject('Rejected');
//             }, 3 * 1000);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//Example
function generateNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number);
        }, 3 * 1000);
    });
}

// generateNumber(10)
//     .then((result) => {
//         console.log(result);
//         return generateNumber(result * 2);
//     })
//     .then((result) => {
//         console.log(result);
//         return generateNumber(result * 3);
//     })
//     .then((result) => console.log(result));

// Featured example: get user -> get service of user ->  calculate the service cost

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'admin',
            });
        }, 1000);
    });
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get the services of ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 3 * 1000);
    });
}
function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the service cost of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 2 * 1000);
    });
}

getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then((data) => console.log(data));
