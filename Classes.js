//Class is a template for creating objects
//It can be used to define properties and methods that the objects will have

class Car {
  constructor(brand, model, year) {
    this.brand = brand; // Property for the car's brand
    this.model = model; // Property for the car's model
    this.year = year; // Property for the car's manufacturing year
  }

  displayInfo() {
    // Method to display car information
    console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
  }
}

const car1 = new Car();

car1.brand = 'Toyota'; // Setting the brand property
car1.model = 'Corolla'; // Setting the model property
car1.year = 2020; // Setting the year property

car1.displayInfo(); // Calling the method to display car information
// Output: Car: Toyota Corolla, Year: 2020

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log('Lights on?', this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

const train1 = new Train('red', true);
train1.toggleLights(); // Toggles the lights
