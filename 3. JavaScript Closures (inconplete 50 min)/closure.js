/*
var sum = function(num1, num2) {
    return num1 + num2;
}

console.log(sum(2,3)); */

///    OR

/*
var num1 = 2;
var num2 = 3;

var sum = function() {
    return num1 + num2;
}

console.log(sum()); */

/// ----------- A simple example of Closure --------------

/*
var num1 = 2;
var num2 = 3;

var sum = function() {
    return num1 + num2;
}

console.dir(sum); */


/// ----------- Example of Closure (better way from 1st examples) --------------

// var num1 = 2;


// var sum = function() {
//     var num2 = 3;
//     return function () {
//         return num1 + num2;
//     }
// }

// var myFunc = sum();

// console.dir(myFunc);


/// -------------- Closure chain --------------
/*
var num1 = 2;

var sum = function () {
    var num2 = 3;
    return function() {
        var num3 = 4;
        return function() {
            var num4 = 5;
            return function() {
                return num1 + num2 + num3;
            }
        }
    }
}


var myFunc1 = sum();

var myFunc2 = myFunc1();

var myFunc3 = myFunc2();

console.log(myFunc3());  */





/*  ---------------------- Closures Examples ---------------------      */


/* ----- Secure private property through closure ---- */

/*
function backAccount(initialalance) {
    var balance = initialalance;// "balance" is a private property
    return function() {
        return balance;
    }
}

var account = backAccount(100000); 

// console.log(account());  // "balance" is accessible from outside of the function, "Closure" do it.
console.dir(account); */


// ----------- Another suitable example of Closures ------------------
/* Closure only carry the values which is used next steps.......  */
/*
var num1 = 2;

var sum = function() {
    var num2 = 3;
    var num = 6;
    return function() {
        return num;
    }
}

var myFunc = sum();
console.dir(myFunc); */





// ----------- "Global" vs "Closure" --------------

// (function() {
//     var num1 = 2;

//     var num3 = 5;// "num3" is not "Global" or "Closure".It's not a "Closure", cause "num3" was not used later 

//     var sum = function() {
//         var num2 = 3;
//         return num1 + num2;
//     }

//     console.dir(sum); // now "num1" is a "closure" not "Global", cause now "num1" is in a enclosing scope
// })();
 


// ----------- "Global" vs "Closure" --------------

// (function() {
//     var num1 = 2;
//     var num2 = 3;

//     var sum = function() {
//         return num1 + num2;
//     }

//     console.log(sum());
//     console.dir(sum);

//     num1 = 6;
//     num2 = 7;

//     console.log(sum());
//     console.dir(sum);
// })();


// ------------- "var"(global) vs "let"(script) ------------

// ##### "let" global scope এ থাকলে সেটা যাবে "script" এর ভিতরে

// let num1 = 5;
// let num2 = 6;

// var sum = function() {
//     return num1 + num2;
// }
// console.log(sum());
// console.dir(sum);

//-----------------------------------------

// ##### "let" block/enclosing scope এ থাকলে সেটা যাবে "Closure" এর ভিতরে

// (function() {
        
//     let num1 = 2;
//     let num2 = 3;

//     var sum = function() {
//         return num1 + num2;
//     }

//     console.log(sum());
//     console.dir(sum);
// })();




// -------------- More practical Examples of "Closures" ------------

/*
function stopWatch() {
    var startTime = Date.now();

    function getDelay() {
        console.log(Date.now() - startTime);
    }

    return getDelay;
}

var timer = stopWatch();

for(var i = 0; i < 10000000; i++) {
    var a = Math.random * 100000;
}

timer();
console.dir(timer);

timer = null; // Developer চাইলে closure এ রাখা রেফারেন্স দূর করতে পারে বা ফেলে দিতে পারে।
            // এর পরে আর "timer" এর রেফারেন্স closure এর ভিতরে থাকবে না।
console.dir(timer);
timer(); */




// ----------------- "Closure" in Asynchronous Javascript ---------------

/*
function async() {
    var a = 20;

    var myFunc = () => {
        console.log(a);
    }

    setTimeout(myFunc, 3000);

    console.dir(myFunc); // "Closure" এর কারনে "myFunc" এ "a" এর মান পাওয়া যাচ্ছে

}

async(); */


// "Asynchronous" ক্ষেত্রেও "Closure" "variable" এর রেফারেন্সকে ধরে রাখে
/*
var a;
function async() {
    a = 20;

    var myFunc = () => {
        console.log(a);
    }

    setTimeout(myFunc, 3000);

    console.dir(myFunc); // "Closure" এর কারনে "myFunc" এ "a" এর মান পাওয়া যাচ্ছে

}

async();

async = null;

a = 30;

console.log(a); */




// ----------- More Practical Examples of Closure -------------------

