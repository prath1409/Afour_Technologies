// A car "class" using function

// function Car( model ) {

//     this.model = model;
//     this.color = "silver";
//     this.year = "2022";
  
//     this.getInfo = function () {
//       return this.model + " " + this.year;
//     };
  
//   }

//   let myCar = new Car("ford");

// myCar.year = "2024";

// console.log( myCar.getInfo() );


// A car "class" using class 
class Car {
    constructor(model) {
        this.model = model;
        this.color = 'silver';
        this.year = '2022';
    }

    getInfo() {
        return `${this.model} ${this.year}`;
    }
}

let myCar = new Car('ford');

myCar.year = '2024';
console.log(myCar.getInfo());
console.log(myCar.color);
console.log(myCar.year);