// ---------------- Synchronous ----------------------

/*
const second = () => console.log(`I am second`);
const third = () => console.log(`I am third`);

const first = () => {
	console.log(`I am first`);
	second();
	third();
};

first();

*/

// ---------------- Asynchronous (setTimeout()) ----------------------

/*
const second = () => console.log(`I am second`);
const third = () => console.log(`I am third`);

const first = () => {
    console.log(`I am first`);
    setTimeout(second, 0); 
    third();
};

first();
*/

// ------------------------------  EVENT LOOP (Render Queue) -----------------

/*
function process(num) {
	// process heavy sync task

	console.log(num);
}

[1, 2, 3, 4, 5].forEach((i) => {
    process(i);
});

*/

// --------------------------------- EVENT LOOP (Microtask Queue) --------------------------------
// Promise তার callback কে, Web API তে না পাঠিয়ে, Microtask Queue তে পাঠিয়ে দেয়। (ES-6 নিয়মানুসারে)
// Event Loop এর কাছে যেমন Render Queue এর Priority, callback Queue থেকে বেশি ছিল,
// তেমনিভাবে Event Loop এর কাছে  "Microtask Queue" এর Priority, "callback Queue" থেকে বেশি
// তাই আগে "Microtask Queue" এর কাজ হবে তারপর "Callback Queue" এর কাজ হবে 


const second = () => {
	console.log(`I am second`);
};
const third = () => {
	console.log(`I am third`);
};

const first = () => {
	console.log(`I am first`);

	setTimeout(second, 0);

	new Promise((resolve, reject) => {
		resolve("I am right after third, before second");
	}).then((res) => {
		console.log(res);
    });
    
    third();
};

first();

