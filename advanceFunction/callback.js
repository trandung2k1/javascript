//Asynchronous callbacks

function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);
        callback(url);
    }, 1000);
}
function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';

download(url, process);

function download1(url, success, failure) {
    setTimeout(() => {
        console.log(`Downloading the picture from ${url} ...`);
        !url ? failure(url) : success(url);
    }, 1000);
}

download1(
    url,
    (url) => console.log(`Processing the picture ${url}`),
    (url) => console.log(`The '${url}' is not valid`),
);

//issues callback: callback hell

// asyncFunction(function(){
//     asyncFunction(function(){
//         asyncFunction(function(){
//             asyncFunction(function(){
//                 asyncFunction(function(){
//                     ....
//                 });
//             });
//         });
//     });
// });
