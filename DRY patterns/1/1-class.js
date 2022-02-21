class Cake{

    // We can define the body of a class" constructor
    // function by using the keyword "constructor" 
    // with a list of class variables.
    constructor( name, toppings, price, cakeSize ){
        this.name = name;
        this.cakeSize = cakeSize;
        this.toppings = toppings;
        this.price = price;
    }

    // As a part of ES2015+ efforts to decrease the unnecessary
    // use of "function" for everything, you'll notice that it's
    // dropped for cases such as the following. Here an identifier
    // followed by an argument list and a body defines a new method

    addTopping( topping ){
        this.toppings.push( topping );
    }

    // Getters can be defined by declaring get before
    // an identifier/method name and a curly body.
    get allToppings(){
        return this.toppings;
    }

    get qualifiesForDiscount(){
        return this.price > 5;
    }

    // Similar to getters, setters can be defined by using
    // the "set" keyword before an identifier
    set cakeSize( size ){
        if ( size < 0){
            throw new Error( "Cake must be a valid size - either small, medium or large" );
        }
       this.cakeSize = size;
    }
}

// Usage
let cake = new Cake( "chocolate", ["chocolate chips"], 5, 9);