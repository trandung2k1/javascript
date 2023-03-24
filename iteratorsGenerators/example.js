// function* yieldArrayElements() {
//     yield 1;
//     yield* [20, 30, 40];
// }

// let a = yieldArrayElements();

// console.log(a.next()); // { value: 1, done: false }
// console.log(a.next()); // { value: 20, done: false }
// console.log(a.next()); // { value: 30, done: false }
// console.log(a.next()); // { value: 40, done: false }
// console.log(a.next()); // { value: undefined, done: true }

async function* create(start, end) {
    for (let i = start; i <= end; i++) {
        yield new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(i);
            }, 1000);
        });
    }
}

(async () => {
    let c = create(1, 5);
    for await (let num of c) {
        console.log(num);
    }
})();
