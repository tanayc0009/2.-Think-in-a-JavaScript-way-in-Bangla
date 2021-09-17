

// ------------- Iterator -----------------------

// let number = [1, 2, 3];

// let iterator = number[Symbol.iterator]();

// console.log(iterator.next());;
// console.log(iterator.next());;
// console.log(iterator.next());;




//------------------------- Generator Function -------------------------


// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
// }


// // function* generator() {
// //   yield 1;
// //   yield 2;
// //   yield 3;
// //   yield {
// //     name: "Tanay",
// //     age: 20,
// //     country: "Bangladesh",
// //     full: function() {
// //       console.log(`${this.name} is ${this.age} years & he is a ${this.country}`);
// //     }
// //   };
// // }

// let iterator = generator(); // same as  "[Symbol.iterator]()"

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());










// function* generator() {
//   yield 1; // "yield" generator function er value produce kore
//   yield 2;
  
//   return "I am finished"; // return is the last step of generator function. value produce kora stop kore

//   yield 3;
//   yield 4;
// }

// let iterator = generator();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());





// ----------------------- Syntax of GENERATOR function ------------------------------------------


// As Generator Functions
// function *myGenerator() {}

// -------- or ---------
// function* myGenerator() {}

// -------- or ---------
// function * myGenerator() {}


// As Generator Methods
// const myGenerator = function*() {}


// Generator arrow functions
// Can't use it with arrow functions
// let generator = *() => {}


// Inside Class
// class myClass {
//   *myGenerator() {}
// }


// Inside Object Literal
// const myObject = {
//   *myGenerator() {}
// }









//-------------------------------- Example-1: Make Object Iterable ----------------------------------------------



//----------- Iterator part --------------

// let object = {
//   value1: 1,
//   value2: 2,
//   value3: 3,
//   value4: 4,
// };

// console.log(Object.entries(object)); // [ [ 'value1', 1 ], [ 'value2', 2 ], [ 'value3', 3 ], [ 'value4', 4 ] ]


// Object.prototype[Symbol.iterator] = function () {
// 	const entries = Object.entries(this);
// 	let count = entries.length;
// 	let index = 0;
// 	return {
// 		next() {
// 			if (count > 0) {
// 				let result = { done: false, value: entries[index][1] };
// 				count--;
// 				index++;
// 				return result;
// 			}
// 			return { done: true };
// 		},
// 	};
// };



// for (let element of object) {
//   console.log(element);
// }

// console.log([...object]); // spread operator

// console.log({ ...object }); // one way for object iteration but it's not by iterable

















//----------- Generator part --------------

// let object = {
//   value1: 1,
//   value2: 2,
//   value3: 3,
//   value4: 4,
// };




// function *generator(obj) {
//   const entries = Object.entries(obj);
//   for (let element of entries) {
//     yield element[1];
//   }
// }

// const iterator = generator(object);

// // console.log(iterator);


// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());


// // for (let element of iterator) {
// //   console.log(element);
// // }


// console.log([...iterator]);









// ------------------------------- Example-2: Range Function -------------------------------------------


// ----------- Iterator Part ---------------------

// function range(star, end, step) {
//   let current = star;
// 	return {
//     [Symbol.iterator]: function () {
//       return {
//         next() {
//           let result;
// 					if (current <= end) {
//             result = {
//               done: false,
// 							value: current,
// 						};
// 						current += step;
// 						return result;
// 					}
// 					return {
//             done: true,
// 					};
// 				},
// 			};
// 		},
// 	};
// }


// console.log([...range(1, 1000, 2)]);





// ----------- Generator Part ---------------------


// function *range(start, end, step) {
//   let current = start;


//   while (current <= end) {
//     yield current;
//     console.log("Did u execute ?");
//     current += step;
//   }


// }


// var iterator = range(1, 1000, 2);

// console.log(iterator.next());
// console.log(iterator.next());

// // for (let element of iterator) {
// //   console.log(element);
// // }

// // console.log([...iterator]);










// --------------------------------------- Example-3: GENERATOR Control Flow --------------------------------------------


// function *generator(a, b) {
//   let k = yield a + b;
//   let m = yield a + b + k;

//   yield a + b + k + m;
// }

// var generatorObject = generator(10, 20);

// console.log(generatorObject.next());
// console.log(generatorObject.next(50));
// console.log(generatorObject.next(150));







// --------------------------------------- Async/await (Higher level Abstraction to Generators) --------------------------------------------



// const takeOrder = (customer) => {
//   setTimeout(() => {
//     console.log(`order taken from ${customer}`);
//   }, 1000);
// }

// const processOrder = (customer) => {
//   setTimeout(() => {
//     console.log(`order processed for ${customer}`);
//   }, 2000);
// }

// const completeOrder = (customer) => {
//   setTimeout(() => {
//     console.log(`order completed for ${customer}`);
//   }, 1000);
// }


// function *generator(customer) {
//   yield takeOrder(customer);
//   yield processOrder(customer);
//   yield completeOrder(customer);
// }

// const gen = generator("karim");

// gen.next();
// gen.next();
// gen.next();






// const takeOrder = (customer) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`order taken from ${customer}`);
//     }, 1000);
//   });
// }

// const processOrder = (customer) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`order processed for ${customer}`);
//     }, 2000);
//   });
// }

// const completeOrder = (customer) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`order completed for ${customer}`);
//     }, 1000);
//   });
// }


// async function *generator(customer) {
//   yield await takeOrder(customer);
//   yield await processOrder(customer);
//   yield await completeOrder(customer);
// }

// const gen = generator("karim");


// // gen.next().then(({value}) => {console.log(value)});
// // gen.next().then(({value}) => {console.log(value)});
// // gen.next().then(({value}) => {console.log(value)});


// const promises = [gen.next(), gen.next(), gen.next()];

// (async function () {
//   for await (let p of promises) {
//     console.log(p);
//   }
// })();












// ------------------------ What is ASYNC ITERATOR ---------------------------------------


const myAsyncIterable = {
	async *[Symbol.asyncIterator]() {
		yield "hello";
		yield "async";
		yield "iterator";
	},
};

(async () => {
	for await (let x of myAsyncIterable) {
		console.log(x);
	}
})();




