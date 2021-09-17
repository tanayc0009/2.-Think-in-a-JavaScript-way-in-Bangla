// --------------- Symbol in Javascript --------------
// Symbol's are always uniq

// var symbol1 = Symbol();
// var symbol2 = Symbol();

// console.log(symbol1 === symbol2);
// console.log(symbol1 == symbol2);

// console.log(symbol1);
// console.log(symbol2);

//------------------------------------------------------

// var symbol1 = Symbol("Symbol 1"); // here "Symbol 1" is just a description
// var symbol2 = Symbol("Symbol 2"); // here "Symbol 2" is just a description

// console.log(symbol1); // returns "false"
// console.log(symbol2); // returns "false"

//-------------------------------------------------------

// var name1 = Symbol.for("name 1"); // same description. but "name 1" now use as value
// var name2 = Symbol.for("name 1"); // same description. but "name 2" now use as value

// console.log(name1 == name2); // returns "true"
// console.log(name1 === name2); // returns "true"

//----------------------------  Symbol use as a property of an Object   -----------------------------

// var cricket = Symbol.for("This is Cricket Symbol");

// var object = {
// 	name: "Sakib",
// 	[cricket]: "Bangladesh", // here cricket is "Symbol". Cause "cricket" is covered by []
// 	age : 35,
// 	country: "USA",
// };

// console.log(object);
// console.log(object[cricket]); //  here cricket is a "symbol". returns the value 
// console.log(Object.keys(object)); // returns all keys/ property name's of object.			"Symbol" are hidden but they are work properly
// console.log(Object.values(object)); // returns all property value  name's of object. "Symbol" are hidden but they are work properly

//-----------------------   Why Do We Need "SYMBOLS"    ----------------------------------
//
//  1. Symbols are invisible,
//  2. Avoid Name collisions in global
//  3.

//---------------------------------------------------------------------
//  1. Symbols are invisible,
// symbols are ignored by different kinds of loop, function 

// var object = {};

// object.name = "Javascript";
// object.estd = "1995";

// object[Symbol("founder")] = "Brendan Eich";

// console.log(object);


// ----- Symbol is invisible in for loop ----
// for (let key in object) {
// 	console.log(key);
// }

// console.log(Object.keys(object));
// console.log(Object.values(object));





//---------------------------------------------------------------------
//  2. Avoid Name collisions in global

// var myArray = [1, 2, 3];

// console.log(myArray.includes(2)); // returns "true"
// console.log(myArray["includes"](2)); // is equal to "myArray.includes(2)"  // thats why returns "true"



// var includes = Symbol('My own array includes method');

// Array.prototype[includes] = () => {
// 	console.log("This is my array includes function");
// }

// var myArray = [1, 2, 3];

// myArray[includes](2); // same 
// myArray[includes](); //  same as (2)




// var symbol = Symbol("This is my Symbol");


// var p = {
// 	name: "Tanay",
// 	age: 20,
// 	[symbol]: "Bangladesh",
// }

// console.log(p[symbol]);







// ------------------------------ Well Known Symbol -----------------------------------------




// --------- Symbol.search() -------------

// var title = "JavaScript";

// // 1. title convert to 'new String("JavaScript")'
// // 2. convert parameter ("Javascript") into RegExp (Regular Expression)
// // 3. RegExp er moddhe Symbol.search() er implementation ace ki na

// // console.log(title.search("Script"));
// console.log(title.search(/Script/));





// class Product {
// 	constructor(title) {
// 		this.title = title;
// 	}

// 	// implement search

// 	[Symbol.search](string) {
// 		return string.indexOf(this.title) >= 0 ? "Found" : "Not found";
// 		// return string.indexOf(this.title);
// 	}

// }


// console.log("Tanay Chandra".search("Chandra")); // Global search()


// var laptop = new Product("laptop");

// console.log("HP laptop".search(laptop));













// -------------------------- How to Delete Symbol ---------------------------------------------


function myFunc() {
	const PVT = Symbol("my private value");

	return {
		modify(obj) {
			obj[PVT] = "new property add using Symbol()";
		},
		output(obj) {
			return obj[PVT];
		}
	}
}

const value = myFunc();

const obj = { a: 1, b: 2};

value.modify(obj);
console.log(value.output(obj));

console.log(obj);



delete obj["Symbol(my private value)"]; // We can't Delete Symbol() 

console.log(obj); // No Change

