/* ======================================================
                    VARIABLE NAMING
======================================================= */

// variable এর  meaningful নাম

//-------- bad practice ------
/*
let daysll = 10;

let ok;

if (daysll < 30) {
    ok = true;
}
*/

// ---------- Goog Practice ----------
/*
const MAX_ALLOWED_LOGIN_EXPIRATION_DAYS = 30;

let daysSinceLastLogin = 10;

const isUserLoggedIn = daysSinceLastLogin < MAX_ALLOWED_LOGIN_EXPIRATION_DAYS;
*/

//--------------------------------------------------------------------------------------

// ---- bad Practice ------
/*
let nameValue;
let theProduct:
*/

// -------- Good Practice -------
/*
let name;
let product;
*/

//------------------------------------------------------------------------------------
// এমনভাবে  variable এর নাম দিন যেন purpose মনে রাখতে না হয়

// ---------- bad practice --------------
/*
const products = ["T-shirt", "Shoes", "Watches", "Bags"];

products.forEach((p) => {
    doSomething();
    // What does 'p' stand for ?
    doSomethingElse(p);
});
*/

// ---------- good practice --------------
/*
const products = ["T-shirt", "Shoes", "Watches", "Bags"];

products.forEach((product) => {
    doSomething();
    doSomethingElse(product);
});
*/


// ----------------------------------------------------------------------------------
// Unnecessary context add করার ও প্রয়োজন নেই

// ------------ bad practice --------------
/*
const product = {
    productId: 1,
    productName: "T-Shirt",
    productPrice: 8.99,
    productUnits: 12,
};
*/

// ------------ good practice --------------
/*
const product = {
    id: 1,
    name: "T-Shirt",
    price: 8.99,
    units: 12,
};
*/


/* ======================================================
                    FUNCTION NAMING
======================================================= */


// --------------------------------------------------------------------------------
// function এর নাম long & descriptive দেয়ার চেষ্টা করুন

// ----------- Bad Practice --------------
/*
function email(user) {
    // implementation
}
*/

// ----------- Good Practice --------------
/*
function sendEmailToUser(user) {
    // implementation
}
*/


//----------------------------------------------------------------------------------
// অনেক  arguments avoid করুন

// ------------------ bad practice -----------------------
/*
function getProducts(fields, fromDate, toDate) {
    // implementation
}
*/

// ------------------ Good practice -----------------------
/*
function getProducts({fields, fromDate, toDate}) {
    // implementation
}
*/

// --------------------------------------------------------------------------------
// default arguments use করুন,  conditionals না

//--------- bad -----------
/*
function createShape(type) {
    const shapeType = type || "circle"; // conditionals
}
*/

// ----------- good ----------
/*
function createShape(type = "circle") {
    //........
}
*/


// --------------------------------------------------------------------------------
// parameter হিসেবে flag / checking পাঠানোর প্রয়োজন নাই

// Bad 
/*
function createFile(name, isPublic) {
    if (isPublic) {
        fs.createFile(`./public/${name}`);
    } else {
        fs.createFile(name);
    }
}
*/

//   Good  
/*
function createFile(name) {
    fs.createFile(name);
}

function createPublicFile(name) {
    fs.createPublicFile(name);
}
*/



// --------------------------------------------------------------------------------
// একটা function এর মধ্যে multiple কাজ না করাই ভালো

// -------- bad -----------
/*
function notifyUser(users) {
    users.forEach((user) => {
        const userRecord = database.lookup(user);
        if (userRecord.isVerified) {
            notify(user);
        }
    });
}
*/


// -------- Good -----------
/*
function notifyVerifiedUsers(users) {
    users.filter(isUserVerified).forEach(notify);
}

function isUserVerified(user) {
    const userRecord = database.lookup(user);
    return userRecord.isVerified();
}
*/




/* ======================================================
                    TYPE CHECKING
======================================================= */

// --------------------------------------------------------------------------------
// সব সময়  Strong type(===) check করা ভালো 

// --------- Example: -----------
/*
1 == "1"; // true
1 === "1"; // false
*/

// --------------------- full Example -----------------

/*

const val = "123";

if (val == "123") {
    // reachable
    console.log(`1.${val}`);
}

if (val == 123) {
    // reachable
    console.log(`2.${val}`);
}

if (val === 123) {
    // Unreachable
    console.log(`3.${val}`);
}

if (val === "123") {
    // reachable
    console.log(`4.${val}`);
}

*/




/* ======================================================
                    DEFAULT OBJECT VALUE
======================================================= */

// -------- Bad -----------
/*
const shapeConfig = {
    type: "circle",
    width: 150,
    height: null,
};

function createShape(config) {
    config.type = config.type || "circle";
    config.width = config.width || 300;
    config.height = config.height || 300;
}

createShape(shapeConfig);
*/



// -------------- Good --------------------
/*
const shapeConfig = {
    type: "circle",
    width: 150,
    // Exclude the 'height' key
};

function createShape(config) {
    config = Object.assign(  // Object.assign()   "Follow Documentation for details"
        {
            type: "circle",
            width: 300,
            height: 300,
        },
        config
    );
}

createShape(shapeConfig);

*/






/* ======================================================
                    PROTOTYPE POLLUTION
======================================================= */

// --------------------------------------------------------------------------------
// global prototypes pollute না করাই ভালো

// --------- Bad ------------
/*
Array.prototype.myFunction = function myFunction() {
    // implementation
};
*/


// --------- Good ------------
/*
class MyArray extends Array {
    myFunc() {
        // implementation
    }
}
*/





/* ======================================================
                    CONDITIONAL SHORTHAND
======================================================= */

// conditional shorthand ব্যবহার করা ভালো

// ------- Bad -------------
/*
if (isValid === true) {
    // do something
}

if (isValid === false) {
    // do something
}
*/


// ------- Good ------------
/*
if (isValid) {
    // do something
}

if (!isValid) {
    // do something
}
*/



/* ======================================================
                    METHOD CHAINING
======================================================= */


// --------------------------------------------------------------------------------
// Method changing use করুন 

// ------------- Bad -------------------

/*

class Product {
    constructor(name) {
        this.name = name;
    }
    
    setUnits(units) {
        this.units = units;
    }

    setPrice(price) {
        this.price = price;
    }

    save() {
        console.log(this.name, this.price, this.units);
    }
}

const product = new Product("Bag").setPrice(600).setUnits(12).save();
product.setPrice(23.99);
product.setUnits(12);
product.save();

*/

//----------------- Good ----------------------

/*

class Product {
    constructor(name) {
        this.name = name;
    }

    setUnits(units) {
        this.units = units;
        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    save() {
        console.log(`${this.name}, ${this.price}, ${this.units}`);
    }
}

const product = new Product("T-Shirt").setPrice(600).setUnits(100).save();

*/





/* ======================================================
                    AVOID EVAL
======================================================= */


// ----------------------------------------------------------------------------------------------
// -------- avoid using "eval"


// eval("alert('Hi Programmer, Your site is hackable. There have some vulnareablity.............!');");




/* ======================================================
                    USE CURLY BRAES
======================================================= */


// ----------------------------------------------------------------------------------------------
// don't try omit curly braces and use shorthand


// 1
/*
if (someVariableExists)
    x = false;
*/

// 2 

/*
if (someVariableExists)
    x = false;
anotherFunctionCall();

*/

// One might think that the code above would be equivalent to:

/*
if (someVariableExists) {
    x = false;
    anotherFunctionCall();
}

*/

// Unfortunately, he'd be wrong. In reality, it means

/*

if (someVariableExists) {
    x = false;
}

anotherFunctionCall();

*/






/* ======================================================
                    PROTOTYPE METHODS (in vanila prototype not "Class")
======================================================= */


// ----------------------------------------------------------------------------------------------
// Add methods on the .prototype when writing constructors


// ---------- bad Practice -------------

/*

function Player(name, age) {
    this.name = name;
    this.age = age;

    this.play = function () {
        console.log(`${this.name} is Playing`);
    };
}


let sakib = new Player("sakib", 35);
let tamim = new Player("Tamim", 36);
// sakib.play();


console.log(sakib); // "play function"  method টা বার বার চলে আসে। Player function কে যতবার call করা হবে প্রতিবারই "play function"  method তৈরি হতেই থাকবে। 
console.log(tamim); // একাধিক method থাকলে বারবার call হওয়ার কারনে মেইন Object size অনেক বড় হয়ে যাবে। যেটা পারফর্মেন্স এর জন্য ভালো নাহ। এটা একটা Bad Practice

*/



// ---------- Good Practice -------------
// "play function"  method এখন Exactly "constructor function" অর্থাৎ  Player function এর মধ্যে নাই 
// Player function এর prototype এর মধ্যে আছে ।
// তাই , Player function কে যতবারই call করা হোক না কেন "play function" method create হবে না, তাই Object size ছোট হবে 

/*

function Player(name, age) {
    this.name = name;
    this.age = age;
}

Player.prototype.play = function () {
    console.log(`${this.name} is playing`);
}


let sakib = new Player("sakib", 35);  
let tamim = new Player("Tamim", 36);


console.log(sakib); // এখন play method টা দুজনের মধ্যেই নাই। তাই, Object size ছোট হবে
console.log(tamim);

sakib.play();
tamim.play();

*/









/* ======================================================
                    FOR LOOP
======================================================= */

// Declare variables outside of the for statement


// --------- Bad ------------

/*
for (var i = 0; i < someArray.length; i++) {
    var container = document.getElementById("container");
    container.innerHTML += "My Number: " + i;
    console.log(i);
}
*/

// ------------ Good --------------

/*
var container = document.getElementById("container");
var len = someArray.length;

for (var i = 0; i < len; i++) {
    container.innerHTML += "My Number: " + i;
    console.log(i);
}
*/




/* ======================================================
                        USE "let" "const"
======================================================= */

// Use "let" & "const" as much as possible instead of "var"



/* ======================================================
                        USAGE OF "var"
======================================================= */

// Omit the "var" keyword and use commas instead

// --------- Bad ---------

/*
var someItem = "some string";
var anotherItem = "another string";
var oneMoreItem = "One more string";
*/

// ------------------ Good -------------------

/*

var someItem = "some string",
    anotherItem = "another string",
    oneMoreItem = "one more string";

*/



/* ======================================================
                        USE SEMICOLON
======================================================= */

// Always use semicolon

// ------------ bad ----------
/*
var someItem = "some string"
function doSomething() {
    return 'something'
}
*/

// ------------ good ----------

/*
var someItem = "some string";
function doSomething() {
    return 'something';
}
*/




/* ======================================================
                        USE IIFE (Immediately Invoked Function Expression)
======================================================= */

// function যখন নিজেই নিজেকে call করে তখন তাকে IIFE বলে

/*
(function doSomething() {
    return {
        name: "Sakib",
        lastName: "Hasan",
        age: 35,
    };
})();

*/



/* ======================================================
                        MODULE PATTERN
======================================================= */

// Avoid using global

// ----- Bad ------------

/*

var current = null;
function init() {
    // do something
}
function change() {
    // do something
}
function verify() {
    // do something
}

*/



// ---------------- Good Practice ----------------

/*

const myModule = (function () {
    var current = null;
    var current = console.log("Hello bro.I'm bortoman");
    function init() {
        // do something
        console.log("hello myModule.I'm init");
    }
    function change() {
        // do something
        console.log("hello myModule.I'm change");
    }
    function verify() {
        // do something
        console.log("hello myModule.I'm verify");
    }

    return {
        init,
        change,
        verify,

        bortoman: current, // alias দেওয়া । মানে  হচ্ছে  rename করা হয়েছে
    };
})();

myModule.init();
myModule.change();
myModule.verify();
myModule.bortoman;

*/






/* ======================================================
                        SCRIPT src TAG
======================================================= */

// avoid language attribute at script tag in  html

/* <script type="text/javascript" language="javascript"></script> */








