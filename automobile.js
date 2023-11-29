function FourWheeler(brand, model, fuelType){
    this.brand = brand;
    this.model = model;
    this.fuelType = fuelType;

}

let car1 = new FourWheeler('audi', 'a1', 'petrol')

// console.log(car1)

let audi = Object.create(car1)
audi.color =  'yellow'
// console.log(audi.model)


let car2 = new FourWheeler('Toyota', 'Innova', 'CNG')
// console.log(car2);

let innova = Object.create(car2)
innova.color = 'white'
innova.price = 'Rs 5/- lakh'

console.log();
let car3 = new FourWheeler('BMW', 'series-7', 'Petrol')

let bmw  = Object.create(car3)
bmw.color = 'space-grey'
bmw.price = 200000;

console.log(bmw)



