//  returns a new promise executed first

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejected');
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2 * 1000);
});

Promise.race([p1, p2])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('Error', err);
    });
