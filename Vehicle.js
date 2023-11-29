function Vehicle(brand, model, speed, fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function(){
    this.speed += 80;
    console.log(`speed increased by ${this.speed} after accelerate ${this.brand}, ${ this.model}`)
}

Vehicle.prototype.brake = function(){
    this.speed -= 50;
    console.log(`speed decreased by ${this.speed} after brake ${this.brand}  ${ this.model}`)
}


Vehicle.prototype.refuel = function(){
    console.log(`${this.brand}, ${ this.model} is refueled`)
}


function Car(brand, model, speed, fuelType, numberOfWheels){
    Vehicle.call(this, brand, model, speed, fuelType)
    this.numberOfWheels = numberOfWheels
}


Object.setPrototypeOf(Car.prototype, Vehicle.prototype)

Car.prototype.honk = function(){
    console.log(`${this.brand} ${ this.model} is honking sound`)
}


let car1  = new Car('Audi', 'a1', 20, 'petrol', 4)
console.log(car1)
car1.accelerate()
car1.brake()
car1.refuel()

car1.honk() // honking sound


// Aeroplane Constructor
function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear){
    Vehicle.call(this, brand, model, speed, fuelType)

    this.numberOfEngines = numberOfEngines
    this.hasLandingGear = hasLandingGear

}

Object.setPrototypeOf(Airplane.prototype, Vehicle.prototype)

Airplane.prototype.takeOff = function(){
    console.log(`${this.brand, this.model} is taking Off`);
}


let flight = new Airplane('Air-india', 'A294', 200, 'petrol', 4, true)
console.log(flight);
flight.accelerate()
flight.brake()
flight.refuel()


