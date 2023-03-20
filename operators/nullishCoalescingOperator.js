// value1 ?? value2
//Example

// const result = value1;
// if (result === undefined || result === null) {
//     result = value2;
// }

const name = null ?? 'Dung';
console.log(name); //Dung

const age = undefined ?? 21;
console.log(age); // 21

let count;
let rs = count || 1;
console.log(rs); //1

// Example issues: value = 0 passed -> rs = 1
count = 0;
rs = count || 1;
console.log(rs); //rs = 1

//=> rs = count ?? 1 -> rs = 0

//Chaining with the AND or OR operator
const result = (null || undefined) ?? 'Ok';
console.log(result); // 'Ok'
