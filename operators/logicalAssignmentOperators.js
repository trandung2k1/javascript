// x || y => x || x = y
// x && y => x && x = y
// x ?? y => x ?? x = y

//Or logic: if x is falsy
let title;
title ||= 'Message';
console.log(title); // Message
title = 'Oke';
title || 'Message';
console.log(title); // Ok

// And logic: if x is truthy
let age = 10;
age &&= 21;
console.log(age); //21
age = 0;
age &&= 100;
console.log(age); // 0

//The nullish coalescing assignment operator: if x is null and undefined
let user = {
    username: 'TranDung',
};
user.nickname = 'DungHenry';

console.log(user); //{ username: 'TranDung', nickname: 'DungHenry' }
