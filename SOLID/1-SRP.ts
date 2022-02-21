class Car{
    name: string;
    model: string;
    year: number;
    constructor(name:string, model:string, year:number) {
        this.name = name
        this.model = model
        this.year = year
    }
}
class CarService{
    id:number;
    car: Car;
    getCar(): number{
        return this.id;
    }
    saveCar(): Car{
        return this.car;
    }
}

const ser=new CarService();
ser.id=12;
ser.car= new Car('BMW', 'ERP', 2000);

console.log(ser.getCar());
console.log(ser.saveCar());
