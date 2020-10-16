// ... your code to create a car

class Car {
    constructor(make, reg){
        this.make = make;
        this.reg = reg;
        this.milage = 0;
    }

    getNumberplate() {
        return this.reg;
    }

    getMake() {
        return this.make;
    }

    getMileage() {
        return this.milage;
    }

    addJourney(distance) {
        this.milage += distance;
    }

}

// you pass in a make and number plate
let car = new Car("Ford", "XY11 4TY");

// you can get various bits of information about it
console.log(car.getNumberplate()); // "XY11 4TY"
console.log(car.getMake()); // "Ford"
console.log(car.getMileage()); // 0

// you can add journey
car.addJourney(100);
console.log(car.getMileage()); // 100

car.addJourney(200);
console.log(car.getMileage()); // 300