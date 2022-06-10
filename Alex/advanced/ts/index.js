"use strict";
//test js works
console.log("js connected!");
let vehicleArray = [];
class Vehicle {
    constructor(brand, model, first_registration, mileage, power, img) {
        this.brand = brand;
        this.model = model;
        this.first_registration = first_registration;
        this.mileage = mileage;
        this.power = power;
        this.img = img;
        vehicleArray.push(this);
    }
    printVehicle() {
        return `
         ${this.brand}, ${this.model} and first registration
         ${this.first_registration}.`;
    }
    displayHTML() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${this.brand} ${this.model}</h5>
        <p class="card-text">${this.power} kW, First registgration ${this.first_registration}</p>
        <p class="card-text">Mileage: ${this.mileage} km.</p>
        <a href="#" class="btn_show btn btn-primary">Show more</a>
        </div>
        </div>
        </div>`;
        //     `<div class="d-flex align-items-center">
        //     <div class="flex-shrink-0">
        //       <img src="..." alt="...">
        //     </div>
        //     <div class="flex-grow-1 ms-3">
        //       This is some content from a media component. You can replace this with any content and adjust it as needed.
        //     </div>
        //   </div>`
    }
}
var _transmission;
(function (_transmission) {
    _transmission[_transmission["MANUAL"] = 1] = "MANUAL";
    _transmission[_transmission["SEMIAUTOMATIC"] = 2] = "SEMIAUTOMATIC";
    _transmission[_transmission["AUTOMATIC"] = 3] = "AUTOMATIC";
})(_transmission || (_transmission = {}));
class Car extends Vehicle {
    constructor(brand, model, first_registration, mileage, power, img, motor_type, doors, transmission) {
        super(brand, model, first_registration, mileage, power, img);
        this.motor_type = motor_type;
        this.doors = doors;
        this.transmission = transmission;
    }
    transToString(trans) {
        switch (trans) {
            case 1:
                return `Manual`;
            case 2:
                return `Semi Automatic `;
            case 3:
                return `Automatic`;
            default:
                return `No Information`;
        }
    }
    displayHTML() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card shadow-lg" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.brand} ${this.model}</h5>
                <p class="card-text">${this.power} kW First registration: ${this.first_registration}</p>
                <p class="card-text">Mileage: ${this.mileage} km</p>
                <p class="card-text">Motortype: ${this.motor_type} Doors: ${this.doors}</p>
                <p class="card-text">Transmission: ${this.transToString(this.transmission)}</p>
                <a href="#" class="btn_show btn btn-primary">Show more</a>
            </div>
        </div>
        </div>`;
    }
}
// class Truck extends Vehicle
// {
// }
new Car("Audi", "A4", "03/2021", 7500, 120, "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg", "gasoline", 5, 1);
new Car("Audi", "A4", "03/2021", 7500, 120, "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg", "gasoline", 5, 1);
new Car("Audi", "A4", "03/2021", 7500, 120, "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg", "gasoline", 5, 2);
new Car("Audi", "A4", "03/2021", 7500, 120, "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg", "gasoline", 5, 1);
new Car("Audi", "A4", "03/2021", 7500, 120, "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg", "gasoline", 5, 1);
new Car("Audi", "A4", "03/2021", 7500, 120, "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg", "gasoline", 5, 1);
for (const car of vehicleArray) {
    document.getElementById('result').innerHTML += car.displayHTML();
}
