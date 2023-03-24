//issues: callback hell

// function getUser(userId, callback) {
//     console.log('Get user from the database');
//     setTimeout(() => {
//         callback({
//             userId,
//             username: 'Dung',
//         });
//     }, 1000);
// }

// function getServices(user, callback) {
//     console.log(`Get services of ${user.username} from the API.`);
//     setTimeout(() => {
//         callback(['Email', 'VPN', 'CDN']);
//     }, 2000);
// }

// function getServiceCost(services, callback) {
//     console.log(`Calculate service costs of ${services}.`);
//     setTimeout(() => {
//         callback(services.length * 100);
//     }, 3 * 1000);
// }

// getUser(100, (user) => {
//     getServices(user, (services) => {
//         getServiceCost(services, (cost) => {
//             console.log(cost);
//         });
//     });
// });

//Promises chain

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'Dung',
            });
        }, 1000);
    });
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}

// getUser(100)
//     .then(getServices)
//     .then(getServiceCost)
//     .then((cost) => console.log(cost));

async function showServiceCost() {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
}
showServiceCost();
