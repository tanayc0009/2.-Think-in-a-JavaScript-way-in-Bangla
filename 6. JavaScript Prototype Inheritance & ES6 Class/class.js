

// -------------------------- Prototype Inheritance --------------------------------


/*
function Person(name, age) {
    // Parent Class
    this.name = name;
    this.age = age;
}

function Cricketer(name, age, type, country) {
    // Sub Class

    Person.call(this);

    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

Cricketer.prototype.play = function() {
    console.log(`${this.name} is playing.`);
}

let sakib = new Cricketer("Sakib", 35);
console.log(sakib.name);
sakib.play();
sakib.eat();

*/



// ------------------------------- "Prototype Inheritance" convert to "ES-6 Class" --------------------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Cricketer extends Person {   // "extends" for inherit prototype & override constructor function
    constructor(name, age, type, country) {

        super(name, age); // same as "Person.call(this);"

        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing.`);
    }
}

let sakib = new Cricketer("Sakib", 35, "Al-rounder", "Bangladesh");
sakib.eat();
sakib.play();

console.log(sakib.type);
console.log(sakib.country);