//Arrow function do not have this and  arguments
function add(a, b, ...args) {
    console.log(args); //[ 3, 4 ]
}
add(1, 2, 3, 4);

//Example
const show = new Function('...numbers', 'console.log(numbers)');

show(1, 2, 3, 4); //[ 1, 2, 3, 4 ]
