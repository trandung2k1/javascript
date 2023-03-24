const fullName = 'Tran Van Dung';
console.log(fullName); //Tran Van Dung

console.log(fullName.length); //13

for (const c of fullName) {
    console.log(c);
}

//Slice
console.log(fullName.slice(5)); //Van Dung
console.log(fullName.slice(5, 8)); //Van

//start < 0 -> right -> left

console.log(fullName.slice(-4)); //Dung

//Substring
//if start = end => rs = ''
//if not end = start ->
//if start > end swap start, end and start < 0 => start = end = 0

console.log(fullName.substring(10, 13)); //ung
console.log(fullName.substring(10, -1)); //Tran Van D
console.log(fullName.substring(1)); //ran Van Dung
