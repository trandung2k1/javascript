import promise, { users } from './users.js';
promise.then(() => {
    console.log('In using await modules');
    console.log(users);
});
