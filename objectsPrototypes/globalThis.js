//Check environment supports the Fetch API
const canFetch = typeof globalThis.fetch === 'function';
//Nodejs >= 18
console.log(canFetch); // true
//Nodejs < 18
console.log(canFetch); // false

//Web browsers
// globalThis === window; -> true

//Warning: (node:11256) ExperimentalWarning: The Fetch API is an experimental feature.
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((todo) => console.log(todo));
