// ES2015+ syntax used: const, class, constructor, extends , super

class VehiclePrototype {
    constructor(model) {
        this.model = model;
    }

    getModel() {
        console.log('The model of this vehicle is..' + this.model);
    }

    Clone() {}
}

class Vehicle extends VehiclePrototype {
    constructor(model) {
        super(model);
    }
    Clone() {
        return new Vehicle(this.model);
    }
}

const car = new Vehicle('Ford Escort');
const car2 = car.Clone();
car2.getModel();

