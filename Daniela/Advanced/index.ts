let carArray: Array<Vehicle> = [];
class Vehicle {
    name: string;
    brand: string;
    year: number;

    constructor(name: string, brand:string, year: number) {
        this.name = name;
        this.brand = brand;
        this.year = year;
        
    }

    // printMessage() {
    //     return `${this.name} was produced by the brand ${this.brand}, in the year ${this.year}.`;
    // }
}

class Cars extends Vehicle {
    constructor(name: string, brand:string, year: number) {
        super(name, brand, year);
        carArray.push(this);

    }
}

let car1= new Cars("BMW 8 Series", "BMW", 1990-2018);
new Cars("Toyota Highlander", "Toyota", 2001);
new Cars("carName", "brandName", 1999);
new Cars("carName", "brandName", 1999);

console.log(carArray);