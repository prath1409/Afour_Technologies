//  Example 2: Decorating Objects With Multiple Decorators

// The constructor to decorate
class MacBook {
    constructor() {
        this.cost = 997;
        this.screenSize = 11.6;
    }
    getCost() {
        return this.cost;
    }
    getScreenSize() {
        return this.screenSize;
    }
}

// Decorator 1
class Memory extends MacBook {
    constructor(macBook) {
        super();
        this.macBook = macBook;
    }

    getCost() {
        return this.macBook.getCost() + 75;
    }
}

// Decorator 2
class Engraving extends MacBook {
    constructor(macBook) {
        super();
        this.macBook = macBook;
    }

    getCost() {
        return this.macBook.getCost() + 200;
    }
}

// Decorator 3
class Insurance extends MacBook {
    constructor(macBook) {
        super();
        this.macBook = macBook;
    }

    getCost() {
        return this.macBook.getCost() + 250;
    }
}

// init main object
let mb = new MacBook();

// init decorators
mb = new Memory(mb);
mb = new Engraving(mb);
mb = new Insurance(mb);


console.log(mb.getCost());

console.log(mb.getScreenSize());