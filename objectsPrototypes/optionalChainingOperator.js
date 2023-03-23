function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English',
        },
    };
}

let user = getUser(-1);

// console.log(user.profile); // TypeError: Cannot read properties of null (reading 'profile')
let profile = user && user.profile;
console.log(profile); // null
console.log(user?.profile); //undefined: if null or undefined -> undefined
// -> Logic: let profile = user !== null || user !== undefined ? user.profile : undefined;

//
let avatar = user?.profile?.avatar;
console.log(avatar); // undefined

const defaultProfile = {
    default: 'image.png',
    language: 'en',
};

let u = getUser(-1);
let pf = u?.profile ?? defaultProfile;

console.log(pf); // { default: 'image.png', language: 'en' }

//Example
let file = {
    read() {
        return 'file content';
    },
    write(content) {
        console.log(`Writing ${content} to file...`);
        return true;
    },
};
const data = file.read();
console.log(data); //file content
// let compressData = file.compress();
// console.log(compressData); //TypeError: file.compress is not a function

//fix
let compressData = file.compress?.();
console.log(compressData); //undefined

//Use callback
function getData(id, callback) {
    let user = {
        id: id,
        isAdmin: false,
    };
    if (callback) {
        callback(user);
    }
    return user;
}

//Refactor

function getDt(id, callback) {
    let user = {
        id: id,
        isAdmin: false,
    };
    callback?.(user);
    return user;
}

function callback(user) {
    user.isAdmin = true;
    user.id = 1000;
}

const res = getDt(1, callback);
console.log(res); //{ id: 1000, isAdmin: true }
