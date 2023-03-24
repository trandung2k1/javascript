const resp = await fetch('https://jsonplaceholder.typicode.com/users');
const users = await resp.json();
export { users };
