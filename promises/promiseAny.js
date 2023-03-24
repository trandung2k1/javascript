//  returns a new promise executed first fulfilled
//  all rejected = > [AggregateError: All promises were rejected] [ 'error1', 'error2' ]

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejected');
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(10);
    }, 2 * 1000);
});

Promise.any([p1, p2])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
