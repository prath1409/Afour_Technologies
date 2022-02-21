class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = "male";
    }
}
// a new instance of Person can then easily be created as follows:
const clark = new Person( 'Clark', 'Kent' );
console.log(clark);

class Superhero extends Person {
    constructor(firstName, lastName, powers) {
        // Invoke the superclass constructor 
        super(firstName, lastName);
        this.powers = powers;
    }
}

// A new instance of Superhero can be created as follows

const SuperMan = new Superhero('Clark','Kent', ['flight','heat-vision']);
console.log(SuperMan);