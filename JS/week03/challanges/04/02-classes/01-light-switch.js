// ... your code to create a lightswitch
class Lightswitch {
    constructor() {
        this.state = false;
    }

    turnOn() {
        this.state = true;
    }
    
    turnOff() {
        this.state = false;
    }

    isOn() {
        return this.state;
    }
}


let lightswitch = new Lightswitch();

// you can check whether it is on or not
console.log(lightswitch.isOn()); // false

// you can turn it on
lightswitch.turnOn();
console.log(lightswitch.isOn()); // true

// you can turn it off
lightswitch.turnOff();
console.log(lightswitch.isOn()); // false