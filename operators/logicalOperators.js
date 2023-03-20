//Not
let isLoading = false;
console.log(!isLoading); // true

// Double-negation (!!)
console.log(!!isLoading); // -> true -> false

//?And

// a	    b	    a && b
// true	    true	true
// true	    false	false
// false	true	false
// false	false	false
let eligible = true;
let required = true;

console.log(eligible && required); // true

let b = true;
let result = b && 1 / 2;
console.log(result); // 0.5

b = false;
result = b && 1 / 2;

console.log(result); //false

//let rs = a && b  && c
//convert to boolean
//return first value =  false
//all value = true => return last value

//? Or

// a	    b	    a || b
// true	    true	true
// true	    false	true
// false	true	true
// false	false	false

let c = true;
let d = false;
console.log(c || d); // true
c = false;
console.log(d || c); // false

//let res = a || b || c;
//convert to boolean
//return first value = true
//all value = false => return last value

//! Note -> ! > && >> ||
