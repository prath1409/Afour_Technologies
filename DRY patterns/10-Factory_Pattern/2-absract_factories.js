class AbstractVehicleFactory {
    constructor() {
        // Storage for our vehicle types
        this.types = {};
    }

    static getVehicle(type, customizations) {
        const Vehicle = this.types[type];

        return Vehicle ? new Vehicle(customizations) : null;
    }

    static registerVehicle(type, Vehicle) {
        const proto = Vehicle.prototype;

        // only register classes that fulfill the vehicle contract
        if (proto.drive && proto.breakDown) {
            this.types[type] = Vehicle;
        }

        return abstractVehicleFactory;
    }
}

// Usage:
const abstractVehicleFactory = new AbstractVehicleFactory();

abstractVehicleFactory.registerVehicle('car', Car);
//abstractVehicleFactory.registerVehicle('truck', Truck);

// Instantiate a new car based on the abstract vehicle type
const car = abstractVehicleFactory.getVehicle('car', {
    color: 'lime green',
    state: 'like new',
});

// Instantiate a new truck in a similar manner
const truck = abstractVehicleFactory.getVehicle('truck', {
    wheelSize: 'medium',
    color: 'neon yellow',
});
