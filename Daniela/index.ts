// Basic 1:
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”

class Person {
    fname: string;
    lname: string;
    age: number;
    jobTitle: string;
    constructor(fname: string, lname: string, age: number, jobTitle: string) {
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