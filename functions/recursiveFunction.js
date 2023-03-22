function sum(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum(n - 1);
}
console.log(sum(2));

function countDown(n) {
    console.log(n);
    let next = n - 1;
    if (next > 0) {
        countDown(next);
    }
}
countDown(3);