
/*
let person = {};

person.name = "Jasim";
person.age = 30;

person.eat = function() {
    console.log(`Person is eating`);
}

person.sleep = function() {
    console.log(`Person is sleeping`);
}

*/



//------------------- Shorthand Form -----------------

/*
function Person(name, age) {
    let person = {};
    person.name = name;
    person.age = age;

    person.eat = function () {
        console.log(`Person is eating`);
    }

    person.sleep = function () {
        console.log(`Person is sleeping`);
    }
    return person;
}

const sakib = Person("Sakib", 35);
const tamim = Person("Tamim", 36);

*/


//------------------- More Shorthand Form -----------------

/*const personMethods = {
    eat() {
        console.log(`Person is eating`);
    },
    sleep() {
        console.log(`Person is sleeping`);
    },
    play() {
        console.log(`Person is playing`)
    },
}


function Person(name, age) {
    let person = {};

    person.name = name;
    person.age = age;

    person.eat = personMethods.eat;
    person.sleep = personMethods.sleep;
    person.play = personMethods.play;

    return person;
}
*/


//------------------- More & More Shorthand Form -----------------

    /*  --------- Object.create()  Method ------------  */

// const captain = {
//     name : "Mashrafi",
//     age : 36,
//     country : "Bangladesh",
// }

// const player = Object.create(captain);

// console.log(player)

// console.log(player.name);
// console.log(player.age);


/*

const personMethods = {
    eat() {
        console.log(`Person is eating`);
    },
    sleep() {
        console.log(`Person is playing`);
    },
    play() {
        console.log(`Person is playing`);
    },
}

function Person(name, age) {
    let person = Object.create(personMethods);

    // console.log(person);

    person.name = name;
    person.age = age;

    return person;
}


const sakib = Person("Sakib", 35);
sakib.eat();
sakib.play();
sakib.sleep();
console.log(sakib.name);
console.log(sakib.age);


const tamim = Person("Tamim", 35);
tamim.eat();
tamim.play();
tamim.sleep();
console.log(tamim.name);
console.log(tamim.age);

 */




// ----------------------- Without assistance of other Object -------------------------


// function test() {

// }

// console.dir(test);
// console.log(test.prototype);



/*

function Person(name, age) {
    let person = Object.create(Person.prototype);

    // console.log(person);

    person.name = name;
    person.age = age;

    return person;
}

Person.prototype = {
    eat() {
        console.log(`Person is eating`);
    },
    sleep() {
        console.log(`Person is sleeping`);
    },
    play() {
        console.log(`Person is playing`);
    },
}


const sakib = Person("Sakib", 35);
sakib.eat();
sakib.play();
sakib.sleep();
console.log(sakib.name);
console.log(sakib.age);


const tamim = Person("Tamim", 35);
tamim.eat();
tamim.play();
tamim.sleep();
console.log(tamim.name);
console.log(tamim.age);

*/





// function Person(name, age) {
//     // let person = Object.create(Person.prototype); // "new" keyword লেখার কারণে এই দুইটা লাইন Javascript নিজে নিজেই লিখে নেয় 

//     this.name = name; // person.name এর জায়গায় this.name লিখে নেয়
//     this.age = age; // person.age এর জায়গায় this.age লিখে নেয়

//     // return person; // "new" keyword লেখার কারণে এই দুইটা লাইন Javascript নিজে নিজেই লিখে নেয় 
// }

// Person.prototype = {
//     eat() {
//         console.log(`Person is eating`);
//     },
//     sleep() {
//         console.log(`Person is sleeping`);
//     },
//     play() {
//         console.log(`Person is playing`);
//     },
// }


// const sakib = new Person("Sakib", 35);
// console.log(sakib.name);
// sakib.play()
// const tamim = new Person("Tamim", 35);





/// ---------------- Last & final Process Of prototype -------------


/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    eat() {
        console.log(`${this.name} is eating`);
    },
    sleep() {
        console.log(`${this.name} is sleeping`);
    },
    play() {
        console.log(`${this.name} is playing`);
    },
}

const sakib = new Person("sakib", 35);
console.log(sakib.name);
console.log(sakib.age);
sakib.eat();
sakib.sleep();
sakib.play();

const tamim = new Person("Tamim", 36);
console.log(tamim.name);
console.log(tamim.age);
tamim.eat();
tamim.sleep();
tamim.play();

*/




/// ---------------------------------- Javascript Classes ---------------------------------------------

// ---- "PROTOTYPE" converted to "CLASS"

/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

const sakib = new Person("Sakib", 35);
console.log(sakib.name);
console.log(sakib.age);
sakib.eat();
sakib.sleep();
sakib.play();

const tamim = new Person("Tamim", 36);
console.log(tamim.name);
console.log(tamim.age);
tamim.eat();
tamim.sleep();
tamim.play();
*/







// --------------- Prototype in Javascript Array ----------------------

// let persons = [];

// // let persons = new Array();

// persons.push("Sakib, Rakib");

// console.log(persons);

// // console.dir(Array);
// console.log(Array.prototype);
