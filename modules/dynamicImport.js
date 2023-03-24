let btn = document.querySelector('#show');

btn.addEventListener('click', function () {
    // import('./features.js')
    //     .then((dialog) => {
    //         dialog.show('Hehe');
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    //Multiple modules
    // Promise.all([
    // import(module1),
    // import(module2),
    //  ...])
    // .then(([module1,module2,module3]) => {
    // });

    // (async () => {
    //     try {
    //         let dialog = await import('./features.js');
    //         dialog.show('Hi');
    //         Note: use object destructuring
    //     } catch (error) {
    //         console.log(error);
    //     }
    // })();

    import('./sum.js').then((sum) => {
        console.log(sum.default(1, 2));
    });
});
