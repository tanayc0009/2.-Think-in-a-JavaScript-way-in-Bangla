/**
 *   Javascript Hoisting(উত্তলোন)
 *   var vs let (and const)    // Variables defined with let and const are hoisted to the top of the block, but not initialized.
 *   function
 */



// --------------- Var ----------------
/* var instantly উপরের লাইনে undefined return করে, অনেকটা এরকম ---------

        var a; // return "undefined"
        console.log(a);
        a = "Bangladesh";

*/

// console.log(a);
// var a = "Bangladesh";


// --------------- Let ----------------
/* Let instantly উপরের লাইনে যাবে ঠিকই কিন্তু সেখানে instantly "undefined" return করে না।
 যে লাইনে let assign করা হয় সেই লাইনে "undefined" return করে। অনেকটা এরকম ---------

        let a; // return "Uncaught ReferenceError"
        console.log(a);
        a = undefined;
        a = "Bangladesh";

*/

// console.log(a);
// let a = "Bangladesh";


// let a; // a = 'undefined';
// console.log(a);



// ------------- More practical Example of Hoisting -----------------

/*
var LANGUAGE = 'Java';
var language = "Javascript";

function getLanguage() {
    if (!language) {
        var language = LANGUAGE;
    }
    return language;
}
console.log(getLanguage()); // return হওয়ার কথা "Javascript", কিন্তু return হচ্ছে "Java", "var" use করার জন্য এরকমটা হচ্ছে।
*/

/// ------------------- OR --------------------


// let LANGUAGE = 'Java';
// let language = "Javascript";

// function getLanguage() {
//     if (!language) {
//         let language = LANGUAGE;
//     }
//     return language;
// }

// console.log(getLanguage()); // return হওয়ার কথা "Javascript", কিন্তু return হচ্ছে "Java", "var" use করার জন্য এরকমটা হচ্ছে।




// ------------- How Hoisting works in "function" ------------------

// "Function definetion" also "Hoisted" to the top

// myFunc();
// function myFunc() {
//     console.log(`I love Javascript!`);
// }


/*
function myFunc() {
    language = "Javascript"; // মনে হতে পারে, language "global" variable এর ভ্যালু চেঞ্জ হচ্ছে। কিন্তু সেটা হচ্ছে না।
    var language; // এই language "Hoisted" হয়ে উপরে উঠে যাবে, এরপর এই language এর ভ্যালু হবে "Javascript"। এখানে global variable কে ধরা হবে নাহ।
    console.log(language);
}
myFunc();  */



// myFunc();
// const myFunc = function() {
//     let language = "Javascript";
//     console.log(language);
// }