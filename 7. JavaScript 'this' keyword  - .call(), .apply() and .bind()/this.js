/** 
    * implicit binding
    * explicit binging
    * new binding
    * window binding
*/
// "this" এর root খুজেতে হলে প্রথমে আমাদের যেতে হবে function call করা হচ্ছে কোন জায়গায়,



// -------------------------------------------------------------- Implicit Binding --------------------------------------------------------------

// Implicit binding only work for normal function will not work for arrow function
// implicit binding এর  ২ টা রুল ফলো করলেই হয়
// ১. কত নাম্বার লাইনে,কোন জায়গায় function টা কল হচ্ছে
// ২. সেখানে যাবো এবং দেখবো কল হওয়ার আগে(বামে) কোন (.) ডট নোটেশন আছে কি না,
// (.) ডট এর আগে(বামে) যে জিনিস বা "Object" টা আছে সেটাই "this"

// নিচের example এ "printPlayerName" property এর "this" হলো "sakib" Object. 
// কারন printPlayerName যেখানে কল হয়েছে, তার আগে (.) Dot এর আগে "sakib" আছে 

/*
var sakib = {
    name: "Sakib",
    age: 35,
    printPlayerName: function() {
        console.log(this.name);
    },
};

sakib.printPlayerName();  

*/



//---- Passes Object form Outside the function -------
/*
var printPlayerNameFunction = function(obj) {
    obj.printPlayerName = function() {
         console.log(this.name);
     }
};


var sakib = {
    name: "Sakib",
    age: 35,
};

var tamim = {
    name: "Tamim",
    age: 36,
};


printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);

sakib.printPlayerName();  // call হয়েছে এখানে। (.) Dot এর আগের sakib হলো "this"
tamim.printPlayerName();  // call হয়েছে এখানে। (.) Dot এর আগের tamim হলো "this"

*/




/*
var Person = function(name, age) {
    return {
        name: name,
        age: age,
        printName: function() {
            console.log(this.name);
        },
    };
};

var sakib = Person('Sakib', 35);

sakib.printName();

*/


/*

var Person = function(name, age) {
    return {
        name: name,
        age: age,
        printName: function() {
            console.log(this.name);
        },
        father: {
            name: "Mr. XXX",
            printName: function() {
                console.log(this.name);
            }
        },
    };
};

var sakib = Person('Sakib', 35);

// sakib.printName();
sakib.father.printName(); // এখানে কল হয়েছে। (.) Dot এর ঠিক ইমিডিয়েট আগে "father" আছে, এখানে "father" হলো "this"

*/






// -------------------------------------------------------------- Explicit Binding --------------------------------------------------------------
// Explicit Binding এ বলেই দেওয়া হয় আসলে "this" কি হবে...
// call(), apply(), bind() এর ভিতর প্রথম প্যারামিটারই হলো "this"


//--------------------- call() ---------- explicit binding


/*
var printName = function () {
    console.log(this.name);
};

var sakib = {
    name: "Sakib",
    age: 35
};

printName.call(sakib); // এখানে বলা হয়েছে যে, "sakib" কে "this" হিসেবে ব্যবহার কর 
*/

/*
var printName = function (v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}.`);
};

var sakib = {
    name: "Sakib",
    age: 35
};

var v1 = "Handsome";
var v2 = "All-rounder";
var v3 = "Best Player";

printName.call(sakib, v1, v2, v3);// call() এর মাধ্যমে ১টা ১টা করে প্যারামিটারও পাস করা যায়
*/

//--------------------- apply() ---------- explicit binding
/*
var printName = function (v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}.`);
};

var sakib = {
    name: "Sakib",
    age: 35
};

var v1 = "Handsome";
var v2 = "All-rounder";
var v3 = "Best Player";

var v = [v1, v2, v3];

printName.apply(sakib, v);//১টা ১টা করে প্যারামিটার না পাঠিয়ে। apply() এর মাধ্যমে প্যারামিটারগুলো Array তে নিয়ে ১ বারেই পাস করা যায়

*/




//--------------------- bind() ---------- explicit binding
// call() এর মতোই কাজ করে কিন্তু bind() সরাসরি কল না করে, function এর একটা instance return করে


/*
var printName = function (v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}.`);
};

var sakib = {
    name: "Sakib",
    age: 35
};

var v1 = "Handsome";
var v2 = "All-rounder";
var v3 = "Best Player";

var newFunc = printName.bind(sakib, v1, v2, v3);// "newFunc" variable এর মধ্যে function এর instance store হলো 

newFunc(); //  এবার সেই instance হওয়া function টা call করা হলো 

*/







// -------------------------------------------------------------- New Binding --------------------------------------------------------------

// "new binding" is covered by Prototype lecture

/*
function Person(name, age) {
    this.name = name;
    this.age = age;

    console.log(`${this.name} is ${this.age} years old`);
}

var sakib = new Person("Sakib", 35);

*/






// -------------------------------------------------------------- Window Binding --------------------------------------------------------------

/*
"use strict";
var printName = function () {
    // console.log(this); // window কে পয়েন্ট করে
    console.log(this.name);// undefined
}

var sakib = {
    name: "Sakib",
}

printName();
*/