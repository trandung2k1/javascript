let result = (10, 10 + 20);
console.log(result); // 30

let x = 10;
let y = (x++, x + 1);
console.log(x); //11
console.log(y); //12

//Example
let z = 10;
z++;
let rs = z + 1;
console.log(rs); //12

let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum); //55
