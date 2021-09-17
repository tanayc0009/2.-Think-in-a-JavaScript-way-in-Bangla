// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype = {
//     eat : function () {
//         console.log(`${this.name} is eating.`);
//     },
// }

// const sakib = new Person("Sakib", 35);
// console.log(sakib);

// const tamim = new Person("Tamim", 36);
// console.log(tamim);






/// --------------------- Prototype Inheritance -----------------------------------
//  JAVA তে "Class" থেকে Object তৈরি করতে হয়,
// কিন্তু Javascript এ "Constructor function" থেকে "Object" তৈরি করতে হয়



/*
var f = function Person() {};

// console.dir(f);

Object.prototype.tanay = function () {
    console.log(`I am Tanay.`);
};

var p = {};

p.tanay();

f.tanay();  */




// ------ PROTOTYPE INHERITANCE --------

/*
function Person(name, age) { // Parent Class
    this.name = name;
    this.age = age;
}

function Cricketer(name, age, type, country) { // Sub Class
    
    Person.call(this); // connects parent class with sub class. এখানকার "this" হলো এই Sub class এর "this"
    
    this.name = name;
    this.age = age;

    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating.`);
    },
};


Cricketer.prototype = Object.create(Person.prototype); // "Cricketer.prototype", "Person.prototype" এর ভিতরের prototype গুলোকে inherit করে নিয়ে আসে Cricketer এর ভিতর
Cricketer.prototype.constructor = Cricketer; // Override the Javascript "Constructor function".For, "Person.call(this)"

Cricketer.prototype.play = function () {
    console.log(`${this.name} is playing.`);
}

const sakib = new Cricketer("Sakib", 35, "All-rounder", "Bangladesh");
console.log(sakib.name);
console.log(sakib.age);
console.log(sakib.type);
console.log(sakib.country);
sakib.eat();
sakib.play();

*/






// ------------- "Inheritance" convert to "Class" ----------------------

/*
class Person { // Parent Class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Cricketer extends Person { // Sub Class
    constructor(name, age, type, country) {
        
        super(name, age); // connects parent class with sub class. Equivalent to "Person.call(this)"

        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing.`);
    }
}



let sakib = new Cricketer("Sakib", 35, "All-rounder", "Bangladesh");

sakib.eat();
sakib.play()


let tamim = new Person("Tamim", 36);
tamim.eat();
// tamim.play(); // Parent cannot access child's property but child can access parent's property

*/







//  ------------------- Classes Getter & Setter ------------------------
// getter -- call as property but behaves as a function/method
// setter -- call as property but behaves as a function/method

/*
class Person {
    constructor(name, age) {
        this.name = name; // property
        this.age = age;
    }
    eat() { // method
        console.log(`${this.name} is eating.`);
    }

    get setName() {
        // getter
        return this.name;
    }

    set setName(name) {
        // setter
        this.name = name;
    }

}

let sakib = new Person("Sakib", 35);

console.log(sakib.setName); // getter

sakib.setName = "Tanay"; // setter


console.log(sakib.name);

*/


//  ------------------- Classes Static Method ------------------------
// Static method not dependent on Instance Object("let sakib" is a instance object).
// Static method can call directly


/*

class Person {
    constructor(name, age) {
        this.name = name; // property
        this.age = age;
    }
    eat() { // method
        console.log(`${this.name} is eating.`);
    }

    static isEqualAge() {
        // static method
        console.log(`I'm Static method`);
    }
}

let sakib = new Person("Sakib", 35);


Person.isEqualAge();// not dependent on instance Object.It can call directly
// Person.eat(); // dependent on instance Object & cannot call directly.It can call through a Object. like -- "sakib.eat()"

*/





// ----------------------------------- Poly Morfijom -------------------------------

/*

class Person {
    // Parent Class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    play() {
        console.log(`${this.name} is playing.`);
    }
}

class Cricketer extends Person {
    // Sub Class
    constructor(name, age, type, country) {

        super(name, age);

        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    play() {
        super.play(); // another examples of poly morfijom 
        console.log(`${this.name} is playing cricket`);
    }
}

let sakib = new Cricketer("Sakib", 35);
sakib.play();

*/