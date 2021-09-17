// ---------------- Blocking Behaviour / Synchronous Behaviour --------------------
/*
const processOrder = (customer) => {
	console.log(`Processing order for customer 1`);

	var currentTime = new Date().getTime();
	while (currentTime + 3000 >= new Date().getTime());

	console.log(`Order Processed for customer 1`);
};

console.log(`Take order for customer 1`);
processOrder();

console.log(`Completed Order for customer 1`);

*/

// ------------------ setTimeout() / asynchronous function --------------------

/*
const processOrder = (customer) => {
	console.log(`Processing order for customer 1`);

	setTimeout(() => {
		console.log(`Cooking completed`);
	}, 3000);

	console.log(`Order processed for customer 1`);
};

console.log(`Taking order for customer 1`);
processOrder();
console.log(`Order Completed for customer 1`);

*/

/*
const takeOrder = (customer, callback) => {
	console.log(`Taking order for ${customer}`);
	callback(customer); // callback with "customer name"
};

const processOrder = (customer, callback) => {
	console.log(`Order processing for ${customer}`);

	setTimeout(() => {
		console.log(`Cooking Completed`);
		console.log(`Order processed for ${customer}`);
		callback(customer); // callback with "customer name"
	}, 3000);
};

const completedOrder = (customer) => {
	console.log(`Completed order for ${customer}`);
};

takeOrder("customer 1", (customer) => {
	processOrder(customer, (customer) => {
		completedOrder(customer);
	});
});   // callback heal


console.log(`Hello`); // test for asynchronous behaviour/ non-blocking behaviour

*/

// --------------------------------- promise (Single Promise) ----------------------------
// Uses for handle a result of a asynchronous operation
// promise has been resolved
// promise has been rejected

/*
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
	//  do stuff
	if (!hasMeeting) {
		const meetingDetails = {
			name: "Technical Meeting",
			location: "Google Meet",
			time: "10:00 PM",
		};
		resolve(meetingDetails);
	} else {
		reject(new Error("Meeting already scheduled!"));
	}
});

meeting
	.then((res) => {
		// resolved data
		console.log(JSON.stringify(res)); // Convert a JavaScript object into a string with "JSON.stringify()"
	})
	.catch((err) => {
		// rejected data
		console.log(err.message);
	});

console.log(`Hello`); // test for asynchronous behaviour/ non-blocking behaviour

*/

// ------------------------------------ Multiple promise ------------------------------

/*
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
	if (!hasMeeting) {
		const meetingDetails = {
			name: "Technical Meeting",
			location: "Google Meet",
			time: "10:00 PM",
		};
		resolve(meetingDetails);
	} else {
		reject(new Error("Meeting already scheduled!"));
	}
});

const addToCalendar = (meetingDetails) => {
	return new Promise((resolve, reject) => {
		const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}.`;
		resolve(calendar);
	});
};

// ----------------- Simplest way of "addToCalendar" ----------------
// const addToCalendar = (meetingDetails) => {
// 	const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
// 	return Promise.resolve(calendar);
// };

meeting
	.then(addToCalendar)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err.message);
	});

console.log(`Hello`);

*/

// ---------------------------- Promise.all() --------------------------------

/*
const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`Promise 2 resolved`);
	}, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

Promise.all([promise1, promise2]).then((res) => console.log(res));

*/

// ------------------------- Promise.race() -------------------------
// "Promise.race()", "Promise.all()" এর মতোই ২টা promise কেই নেয়, কিন্তু আগে যে promise টা resolve হয় শুধু সেটাই return করে
// ২টার মধ্যে race হবে, যে আগে resolve হবে সে result হিসেবে আসবে

/*
const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`Promise 2 resolved`);
	}, 2000);
});

Promise.race([promise1, promise2]).then((res) => console.log(res));

*/

/*
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`Promise 1 resolved`);
	}, 5000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`Promise 2 resolved`);
	}, 2000);
});

Promise.race([promise1, promise2]).then((res) => console.log(res));
console.log(`Hello`);

*/

// ----------------------------------- async-await --------------------------------

/*
function friendlyFunction() {
	return "hello";
}

console.log(friendlyFunction());
console.log(typeof friendlyFunction());

*/
/*
async function friendlyFunction() {
	return "hello";
}

console.log(friendlyFunction());
console.log(typeof friendlyFunction());

*/

// ----------------------------------- async-await --------------------------------

/*
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
	if (!hasMeeting) {
		const meetingDetails = {
			name: "Technical Meeting",
			location: "Google Meet",
			time: "10:00 PM",
		};
		resolve(meetingDetails);
	} else {
		reject(new Error("Meeting already scheduled!"));
	}
});

const addToCalendar = (meetingDetails) => {
	const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
	return Promise.resolve(calendar);
};



// meeting
// 	.then(addToCalendar)
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});


	// --------- "meeting.then(addToCalendar)" Convert to async-await --------------


async function myMeeting() {
	const meetingDetails = await meeting;
	const calendar = await addToCalendar(meetingDetails);
	console.log(calendar);
}

myMeeting();

console.log(`Hello world`);

*/

// ------------------------ catch(err) // error handling -----------------------------

/*

const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
	if (!hasMeeting) {
		const meetingDetails = {
			name: "Technical Meeting",
			location: "Google Meet",
			time: "10:00 PM",
		};
		resolve(meetingDetails);
	} else {
		reject(new Error("Meeting already scheduled!")); // Creating a error
	}
});

const addToCalendar = (meetingDetails) => {
	const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
	return Promise.resolve(calendar);
};

async function myMeeting() {
	try {
		const meetingDetails = await meeting;
		const calendar = await addToCalendar(meetingDetails);
		console.log(calendar);
	} catch {
		console.log(`Something wrong happened`);
	}
}

myMeeting();

*/