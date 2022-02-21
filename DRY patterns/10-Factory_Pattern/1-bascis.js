// Types.js - Constructors used behind the scenes

// A constructor for defining new cars
class Car {
    constructor({
        doors,
        state,
        color
    }) {
        // some defaults
        this.doors = doors || 4;
        this.state = state || 'brand new';
        this.color = color || 'silver';
    }
}
// A constructor for defining new trucks
class Truck {
    constructor({
        state,
        wheelSize,
        color
    }) {
        this.state = state || 'used';
        this.wheelSize = wheelSize || 'large';
        this.color = color || 'blue';
    }
}

// FactoryExample.js

// Define a vehicle factory
class VehicleFactory {
    // Define the prototypes and utilities for this factory

    // Our default vehicleClass is Car
    constructor() {
        this.vehicleClass = Car;
    }
    // Our Factory method for creating new Vehicle instances
    createVehicle(options) {
        switch (options.vehicleType) {
            case 'car':
                this.vehicleClass = Car;
                break;
            case 'truck':
                this.vehicleClass = Truck;
                break;
                //defaults to VehicleFactory.prototype.vehicleClass (Car)
        }

        return new this.vehicleClass(options);
    }
}

// Create an instance of our factory that makes cars
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6,
});

// // Test to confirm our car was created using the vehicleClass/prototype Car
// console.log(car instanceof Car);
// console.log(car);


// //  Approach #1: Modify a VehicleFactory instance to use the Truck class

// const movingTruck = carFactory.createVehicle({
//     vehicleType: 'truck',
//     state: 'like new',
//     color: 'red',
//     wheelSize: 'small',
// });

// // Test to confirm our truck was created with the vehicleClass/prototype Truck
// console.log(movingTruck instanceof Truck);
// console.log(movingTruck);

//  Approach #2: Subclass VehicleFactory to create a factory class that builds Trucks

class TruckFactory extends VehicleFactory {
    constructor() {
        super();
        this.vehicleClass = Truck;
    }
}
const truckFactory = new TruckFactory();
const myBigTruck = truckFactory.createVehicle({
    state: 'omg..so bad.',
    color: 'pink',
    wheelSize: 'so big',
});

// Confirms that myBigTruck was created with the prototype Truck
console.log(myBigTruck instanceof Truck);
console.log(myBigTruck);