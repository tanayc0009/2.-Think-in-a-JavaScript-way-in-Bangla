// ----------------------- XMLHTTPREQUEST (XHR = XML HTTP REQUEST) ------------------------
//
// AJAX = Asynchronous JavaScript And XML
//
// JSON = JAVASCRIPT OBJECT NOTATION  --- created by "DOUGLAS CROCKFORD"

const getButton = document.getElementById("get_button");
const sendButton = document.getElementById("send_button");

const sendRequest = function (method, url, data) {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = "json";

		xhr.setRequestHeader("Content-Type", "application/json");

		xhr.send(data);

		xhr.onload = function () {
			if (xhr.status >= 400) {
				reject(xhr.response);
			} else {
				resolve(xhr.response);
			}
		};

		xhr.onerror = function () {
			reject("Something was Wrong!");
		};
	});
	return promise;
};

const getData = function () {
	sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(
		(responseData) => {
			console.log(responseData);
		}
	);
};

const sendData = function () {
	sendRequest(
		"POST",
		"https://jsonplaceholder.typicode.com/post", // wrong url
		JSON.stringify({
			tittle: "Foo",
			body: "bar",
			userId: 1,
		})
	)
		.then((responseData) => {
			console.log(responseData);
		})
		.catch((err) => {
			console.log(err);
		});
};

/*

const getData = function () {
	const xhr = new XMLHttpRequest();

	// GET, POST, PUT, DELETE,( OPTIONS, HEAD )

	xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');

	xhr.responseType = "json"; // similar of JSON.parse()

	xhr.send();

	xhr.onload = function() {

		const result = xhr.response;

		//console.log(JSON.parse(result)); // "JSON.parse()" Converts JSON data to real Javascript Object

		console.log(result); // use it if set to xhr.responseType = "json";

	}

};

*/

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
