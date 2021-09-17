
// Javascript এর ভাষায় "Iterable" হলো যার মধ্যে iterator বা Symbol(Symbol.iterator) আছে সেটাই "Iterable"
// আর Iterator হলো যে Iterate করায় বা যে ম্যাকানিজম iterate করায় তাকে Iterator বলে ।


// Normal for loop
// [ for (initial; condition; step) { ... } ]

// let array = ["a", "b", "c"];
// var len = array.length;
// for (let i = 0; i < len; i++) {
//   console.log(array[i]);
// }

// ----------------- OR (Iterable) -----------------------

// let array = ["a", "b", "c"];

// // console.dir(array); // built-in "Symbol(Symbol.iterator)" তাই Array iterable

// for ( let element of array) {
//   console.log(element);
// }

// ------------- String is also iterable -------
// let string = "Javascript";

// for (let element of string) {
//   console.log(element);
// }

// ------------- Number is not iterable
// let num = 122422423432424;

// for (let element of num) {
//   console.log(element);
// }


// --------------- Object ------------------

// let object = {
//   cowboy: "A",
//   nerd: "B",
//   smiling: "C",
// }

// let entries = Object.entries(object); // [ ["cowboy", "A"], ["nerd", "B"], ["smiling", "c"] ]
// let entriesLen = entries.length;

// for ( let i = 0; i < entriesLen; i++) {
//   console.log(entries[i][1]); // Object values.
// }




// const person = {
//   firstName : "John",
//   lastName  : "Doe",
//   age     : 50,
//   eyeColor  : "blue"
// };

// var entries = Object.entries(person);


// for ( let i = 0; i < entries.length; i++) {
//   //  console.log(entries[i][0]); //  Object Properties
//    console.log(entries[i][1]); //  Object values
// }


//--------------------- OR ( not Iterable) ---------------------------

// let object = {
//    firstName: "Tanay",
//    lastName: "Chandra",
//    age: 20,
// }

// // console.dir(object); // built-in "Symbol(Symbol.iterator)" নাই, তাই Object iterable নয়

// for (let key of object) {

//   console.log(key);
// }









// -------------------------------- What is Iterable Protocol  ------------------------------------

// Rule 1: Must have a "Symbol.iterator" function property
// Rule 2: The function must return an Iterator


// rule 2: implementation :---------------
// let array = ["A", "B", "C"];
// let iterator = array[Symbol.iterator](); // Symbol.iterator function returns an "Iterator"
// console.dir(iterator);

// console.log(iterator.next()); // 1st element of array
// console.log(iterator.next()); // 2nd element of array
// console.log(iterator.next()); // 3rd element of array
// console.log(iterator.next()); // 4th element of array which is "undefined"






// ------------------------------ What is Iterator Protocol --------------------------------------------
// Rule 1: Must be a JS object
// Rule 2:  It needs to implement a next() method
// Rule 3: next() must return an object with "done: Boolean" & a "Value"

// let array = ["A", "B", "C"];

// let iterator = array[Symbol.iterator]();

// console.dir(iterator);


// ------------------------------ Example 1: Change Spread Operator --------------------------------------------


// var str = "Javascript"[Symbol.iterator]();

// console.log(str.next()); // J
// console.log(str.next()); // a
// console.log(str.next()); // v
// console.log(str.next()); // a
// console.log(str.next()); // s
// console.log(str.next()); // c
// console.log(str.next()); // r
// console.log(str.next()); // i
// console.log(str.next()); // p
// console.log(str.next()); // t
// console.log(str.next()); // undefined



// console.log([..."Hello"]);
// console.log(..."Hello"); // 




 // -------- Custom iterator ----------------

//  String.prototype[Symbol.iterator] = function () {
//    let count = this.length;
//    return {
//      next() {
//        // return korbo {done: false/true, value: "JS"}
//        if (count > 0) {
//          count--;
//          return {done: false, value: "JS"}
//        }
//        return { done: true};
//      }
//    }
//  }


// console.log([..."Hello"]);
//  console.log([..."Tanay"]);
//  console.log([..."Bangladesh"]);







// ------------------------------------- Example-2: Our Own Custom Iterable & Iterator -----------------------------------------



function range(start, end, step) {
	let current = start;
	return {
		[Symbol.iterator]: function () {
			return {
				next() {
					if (current <= end) {
						result = {
							done: false,
							value: current,
						};
						current += step;
						return result;
					}
					return {
						done: true,
					};
				},
			};
		},
	};
}

var str = Boolean;
var str1 = "Tanay chandra"

console.log([...range(1, 30, 2)]);
console.log([...range(1, 100000, 2)]);

