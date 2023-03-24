var users = [];
export default (async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
})();
export { users };
