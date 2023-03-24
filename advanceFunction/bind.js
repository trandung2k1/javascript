let person = {
    name: 'John Doe',
    getName: function () {
        console.log(this.name);
    },
};
let f = person.getName.bind(person);

setTimeout(f, 1000);
//this inside setTimeout = global or undefined(strict mode)

let runner = {
    name: 'Runner',
    run: function (speed, a) {
        console.log(a);
        console.log(this.name + ' runs at ' + speed + ' mph.');
    },
};
let flyer = {
    name: 'Flyer',
    fly: function (speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    },
};

let run = runner.run.bind(flyer, 20, 100);
run(); //100 Flyer runs at 20 mph.
