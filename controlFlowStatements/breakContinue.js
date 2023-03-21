for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

outer: for (let i = 10; i < 20; i++) {
    if (i == 15) {
        break outer;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}

out: for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        continue out;
    }
    console.log(i);
}
