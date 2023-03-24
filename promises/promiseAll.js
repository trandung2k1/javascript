//All promise passed => [promise1, promise2, ...]
//If promise  rejected -> return promise rejected first

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2 * 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejected');
    }, 3 * 1000);
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Err');
    }, 2 * 1000);
});

Promise.all([p1, p2, p3, p4])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
