class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(value) {
        value = value.trim();
        if (value === '') {
            throw 'The name cannot be empty';
        }
        this.name = value;
    }
    set setname(value) {
        value = value.trim();
        if (value === '') {
            throw 'The name cannot be empty';
        }
        this.name = value;
    }
    get getname() {
        return this.name;
    }
}
const pr = new Person('Nam');
console.log(pr.getName()); //Nam
console.log(pr.name); //Nam

console.log(pr.getname); //Nam
pr.setname = 'Mai';
console.log(pr.getname); //Mai

const st = {
    name: 'Lan',
    get getName() {
        return this.name;
    },
    set setName(value) {
        this.name = value;
    },
};
console.log(st.getName); //Lan
st.setName = 'An';
console.log(st.getName); //An
