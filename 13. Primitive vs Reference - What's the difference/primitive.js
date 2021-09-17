// --------------- Expected Behaviour --------------
/*
var a = 5;
var b = a;

a = 6;

console.log(a);
console.log(b);
*/

// ----------=------ Unexpected Behaviour ------------------

// -------------- Object ---------------
/*
var a = {
	name: "Sakib",
};

var b = a;

a.name = "Tamim";

console.log(a);
console.log(b);
*/

// -------------- Array ---------------
/*
var a = ["Sakib", "Tamim"];

var b = a;

a.push("Mahmudullah");

console.log(a);
console.log(b);
*/

// ---------------

/*
var a = ["Sakib", "Tamim"];

var b = a; // Assign a variable.....

a.push("Mushfiq");// Mutation / Update value

// var a = ["Mahmudullah"]; // Assignment  

a = []; // assignment

console.log(a);

console.log(b);
*/

// ----------------------- Object -----------------------

/*
var language = {
	name: "Javascript",
	estd: "1995",
};

var language2 = { ...language }; // immuably  /// (Spred Operator)

// Immutably = Change na kore

language.founder = "Brendon Eich";

console.log(language);
console.log(language2);
*/

// ---------------------- not Deeply copy --------------

/*
var language = {
	name: "Javascript",
	estd: "1995",
	libraries: ["React", "Vue", "jQuery"],
};

var language2 = { ...language }; // Not immutably

// var language2 = _.cloneDeep(language);// immutably   // Lodash ---- Library

language.libraries.push("Angular");

console.log(language);
console.log(language2);

*/

// ------------------------------ Primitive values --------------------------------

/*
var a = "Sakib"; // normal "string"

console.dir(a);

var b = new String("Sakib"); // Wrapper Type "Object"
// var b = new Number(); // Wrapper Type "Object"
// var b = new Boolean(); // Wrapper Type "Object"

console.dir(b);

*/






// ------------------ Pass by Reference / Value (Function) ------------------
//  Javascript এ  Function এর Parameter হিসেবে সব সময় "Reference" pass হয়।


// let a = {
// 	num: 1,
// };

// let Change = (val) => {
// 	val = {}; // Assignment hocche tai change hocche nah
// 	console.log(val);
// }

// Change(a);

// console.log(a);



/*

let a = {
	num: 1,
};

let Change = (val) => {
	val.num = 2; // Muted / changed the value

	// console.log(val);/
}

Change(a);

console.log(a);

*/