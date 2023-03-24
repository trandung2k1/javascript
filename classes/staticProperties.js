class Item {
    static count = 0;
    constructor() {
        this.constructor.count++;
    }
    static getCount() {
        return Item.count;
    }
}
class I extends Item {
    constructor() {
        super();
    }
}

console.log(Item.count); //0
console.log(Item.getCount()); //0

const i1 = new Item();
const i2 = new Item();
console.log(Item.getCount()); //2

console.log(i1.constructor.count); //2

const dt = new I();
console.log(I.count); //3
