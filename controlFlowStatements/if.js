//if(condition)
//  statement;

//condition = value convert to boolean
let age = 18;
if (age >= 18) {
    console.log('You can sign up');
}
//You can sign up

if (age >= 18) console.log('You can sign up');
//You can sign up

//Nested if statement
age = 16;
let state = 'CA';
if (state == 'CA') {
    if (age >= 16) {
        console.log('You can drive ');
    }
}
//You can drive

//use &&
if (state == 'CA' && age >= 16) {
    console.log('You can drive ');
}
//You can drive
