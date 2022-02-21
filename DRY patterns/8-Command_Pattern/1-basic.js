const carManager = {
    // request information
    requestInfo(model, id) {
        return `The information for ${model} with ID ${id} is foobar`;
    },

    // purchase the car
    buyVehicle(model, id) {
        return `You have successfully purchased Item ${id}, a ${model}`;
    },

    // arrange a viewing
    arrangeViewing(model, id) {
        return `You have successfully booked a viewing of ${model} ( ${id} ) `;
    },
};


carManager.execute = function(name) {
    return (
        carManager[name] &&
        carManager[name].apply(carManager, [].slice.call(arguments, 1))
    );
};
// carManager.execute('buyVehicle', 'Ford Escort', '453543');
console.log(carManager.execute('arrangeViewing', 'Ferrari', '14523'));
console.log(carManager.execute('requestInfo', 'Ford Mondeo', '54323'));
console.log(carManager.execute('requestInfo', 'Ford Escort', '34232'));
console.log(carManager.execute('buyVehicle', 'Ford Escort', '34232'));
// console.log(carManager.buyVehicle('Ford Escort', '453543'));