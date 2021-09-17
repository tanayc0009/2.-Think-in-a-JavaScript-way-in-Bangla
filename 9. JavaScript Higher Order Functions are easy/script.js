// --------------------- Higher Order Function -------------------
// "Function" is a special type of "Object"

// var a = function hello() {
//     console.log("Hello world");
// };

// console.dir(a);

// var str = {
//     name: "Bangladesh",
// }

// console.dir(str);

// --------- Simple Example of Higher Order Function --------------

// function hello() {
//     return function() {
//         console.log(`Hello World!`);
//     };
// };

// hello()();  //same as,  hello1 = hello(); hello1();

// ----------- Example-1 Without "Higher Order Function" (Traditional Way) ----------------
/*
var numbers = [1, 2, 3];

var result = [];

for(let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
}

console.log(result); */

// ----------- Example-1 With "Higher Order Function" ----------------
/*
var numbers = [1, 2, 3];

var result = numbers.map(function(num) { // "map()" is a "Higher order function"
    return num * 2;
});

console.log(result); */

// -----------Example-2 Without "Higher Order Function" ----------------
// avg more than or equal "37"

/*
var players = [
    {
        name: "Sakib",
        avg: 38.23,
    },
    {
        name: "Tamim",
        avg: 36.74,
    },
    {
        name: "Mushfiq",
        avg: 36.78,
    },
    {
        name: "Mahmudullah",
        avg: 37.12,
    }
];

var playersWithThirtySeven = [];

for(let i = 0; i < players.length; i++) {
    if(players[i].avg >= 37) {
        playersWithThirtySeven.push(players[i]);
    }
}

console.log(playersWithThirtySeven)

*/

// -----------Example-2 With "Higher Order Function" ----------------
// avg more than or equal "37"

/*
var players = [
    {
        name: "Sakib",
        avg: 38.23,
    },
    {
        name: "Tamim",
        avg: 36.74,
    },
    {
        name: "Mushfiq",
        avg: 36.78,
    },
    {
        name: "Mahmudullah",
        avg: 37.12,
    }
];

var playersWithThirtySeven = players.filter((num) => { // "filter()" is also a "Higher Order Function"
    return num.avg >= 37; // returns the element
});

console.log(playersWithThirtySeven);

*/

// -----------Example-3 With "Higher Order Function" (Own Made)  (array.map() built in by me) ----------------

const languages = ["Javascript", "Python", "PHP", "C"];

function mapSumit(arr, fn) {
	const newArray = [];

	for (let i = 0; i < arr.length; i++) {
		newArray.push(fn(arr[i]));
	}
	return newArray;
}

const myArray = mapSumit(languages, function (elements) {
	return elements.length;
});

console.log(myArray);


