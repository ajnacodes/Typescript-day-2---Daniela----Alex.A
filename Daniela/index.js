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
let person1 = new Person("Anna", "Smith", 25, "Web Designer");
console.log(person1.printSentence());
// Basic 2
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
class Employee extends Person {
    constructor(fname, lname, age, jobTitle, salary, jobLocation) {
        super(fname, lname, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printData() {
        return `${this.printSentence()} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`;
    }
}
let employee1 = new Employee("Anna", "Smith", 25, "Web Designer", 4500, "Vienna");
console.log(employee1.printData());
