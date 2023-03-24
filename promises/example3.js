const btn = document.querySelector('#btnGet');
const msg = document.querySelector('#message');
const url = 'https://jsonplaceholder.typicode.com/todos?_limit=3';
function load(url) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function () {
            if (request.readyState === 4 && request.status === 200) {
                resolve(request.responseText);
            } else {
                reject(request.status);
            }
        };
        request.send();
    });
}
btn.addEventListener('click', async () => {
    load(url)
        .then((response) => {
            const result = JSON.parse(response);
            console.log(result);
        })
        .catch((error) => {
            msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
        });
});
