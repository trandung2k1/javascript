// Promise that resolves to an array of objects that each describes the result of the input promise.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject(20);
    }, 2 * 1000);
});

Promise.allSettled([p1, p2]).then((result) => {
    console.log(result);
});
