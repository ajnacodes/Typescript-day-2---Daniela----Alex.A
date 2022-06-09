"use strict";
let carArray = [];
class Vehicle {
    constructor(name, brand, year) {
        this.name = name;
        this.brand = brand;
        this.year = year;
    }
}
class Cars extends Vehicle {
    constructor(name, brand, year) {
        super(name, brand, year);
        carArray.push(this);
    }
}
let car1 = new Cars("BMW 8 Series", "BMW", 1990 - 2018);
new Cars("Toyota Highlander", "Toyota", 2001);
new Cars("carName", "brandName", 1999);
new Cars("carName", "brandName", 1999);
console.log(carArray);
