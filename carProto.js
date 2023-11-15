/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
    }

    accelerate() {
        this.currentSpeed++;
    }

    brake() {
        this.currentSpeed--;
    }

    toString() {
        return `Model: ${this.model} going at ${this.currentSpeed} per hour!`;
    }
}

// Create an instance, accelerate twice, brake once, and console log the instance.toString()
const prius = new Car('prius');
prius.accelerate();
prius.accelerate();
prius.brake();
console.log(prius.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.motor = "electric";
    }

    accelerate() {
        super.accelerate();
        super.accelerate();
    }

    toString() {
        return `${super.toString()} but it's more environmentally sound!`;
    }
}

// Create an instance, accelerate twice, brake once, and console log the instance.toString()
const i3 = new ElectricCar('i3');
i3.accelerate();
i3.accelerate();
i3.brake();
console.log(i3.toString());
