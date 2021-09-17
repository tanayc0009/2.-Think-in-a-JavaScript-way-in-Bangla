
// ------------------- Global Execution Context -------------------
/*

    Phase: Loading/Creation   state (1)


    window: global object

    this: window

    variable name: undefined // variable এর নাম কে ধরে রাখে এবং value হিসেবে undefined সেট করে দেয়
        Ex: topic: undefined;

    function name: fn()  // function এর নাম কে ধরে রাখে এবং value হিসেবে function এর definition কে সেট করে রাখে 
        Ex: getTopic(): fn(); // fn() = function getTopic() { return topic; }

    scope chain





    Phase: Execution   state (2)

    
    window: global object

    this: window

    variable name: assigned value // variable এর নাম কে ধরে রাখে এবং value হিসেবে undefined সেট করে দেয়
        Ex: topic: "Javascript Execution Context";

    function name: fn()  // function এর নাম কে ধরে রাখে এবং value হিসেবে function এর definition কে সেট করে রাখে 
        Ex: getTopic(): fn();  // fn() = function getTopic() { return topic; }

    scope chain


 */


    // console.log(topic);
    // var topic = "Javascript Execution Context";

    // function getTopic() {
    //     return topic;
    // }
    // getTopic();





// ------------------- Function/Functional Execution Context -------------------
/*
    function, return হওয়ার সাথে সাথে "Function Execution Context" শেষ হবে
 */

/*
    Phase: Loading/Creation   state (1)


    arguments: { parameters }

    this: window

    variable name: undefined // variable এর নাম কে ধরে রাখে এবং value হিসেবে undefined সেট করে দেয়
        Ex: topic: undefined;

    function name: fn()  // function এর নাম কে ধরে রাখে এবং value হিসেবে function এর definition কে সেট করে রাখে 
        Ex: getTopic(): fn(); // fn() = function getTopic() { return topic; }

    scope chain





    Phase: Loading/Creation   state (1)


    arguments: { parameters }

    this: window

    variable name: undefined // variable এর নাম কে ধরে রাখে এবং value হিসেবে undefined সেট করে দেয়
        Ex: topic: undefined;

    function name: fn()  // function এর নাম কে ধরে রাখে এবং value হিসেবে function এর definition কে সেট করে রাখে 
        Ex: getTopic(): fn(); // fn() = function getTopic() { return topic; }

    scope chain

*/

var a = 1;
function one() {
    console.log(a);
    function two() {
        console.log(b);
        var b = 2;
        function three(d) {
            console.log(c + d);
            let c = 3;
        }
        three();
    }
    two();
}
one();









// ------------------ Scope with Execution Context ---------------------

/*
function hello() {
    var msg = "Hello World";
    console.log(msg);
}

hello();

console.log(msg);  */
