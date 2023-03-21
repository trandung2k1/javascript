// for (initializer; condition; iterator) {
//     // statements
// }
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let j = 5;
for (; j < 10; j++) {
    console.log(j);
}

for (let j = 10; ; j += 2) {
    console.log(j);
    if (j >= 20) {
        break;
    }
}

let k = 1;
for (;;) {
    if (k > 10) {
        break;
    }
    console.log(k);
    k += 2;
}

let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum); //55
