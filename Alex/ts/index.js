"use strict";
// Basic 1:
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
class Person {
    constructor(fname, lname, age, jobTitle) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printSentence() {
        return `Hello there, my name is ${this.fname} ${this.lname} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
    }
}
let person = new Person("Anna", "Smith", 25, "Web Designer");
//console.log(person.printSentence());
//Basic 2
//Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
class Employee extends Person {
    constructor(fname, lname, age, jobTitle, salary, jobLocation) {
        super(fname, lname, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printData() {
        //this.printSentence();
        return `${this.printSentence()}and I get salary ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
let employee = new Employee("John", "Doe", 28, "Senior Developer", 4500, "Vienna");
console.log(employee.printData());
