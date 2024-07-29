const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); //100.0
// tofixed returns a string
const otherNumber = 123.8966;
console.log("hello");
console.log(otherNumber.toFixed(2));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(2)); // Outputs: "1.2e+2"
//hm ny 2 numbers tk precise krna hai lykin ese to original value totally change ho jay gi ,,, isi liye original value ko miantain krny k liye , ab dekho 1.2 , 100 value ko brkrar rakhny k liye .23 , pom=int k bad 2 digits hei to 10^2 ho ga

//toFixed(digits): Formats the number to a specified number of decimal places.
// toPrecision(precision): Formats the number to a specified total number of significant digits.

let num1 = 0.00456789;
console.log(num1.toPrecision(2)); // Outputs: "0.0046"
console.log(num1.toPrecision(1)); // Outputs: "0.005"

let num2 = 12345.6789;
console.log(num2.toPrecision(3)); // Outputs: "1.23e+4"
console.log(num2.toPrecision(6)); // Outputs: "12345.7"

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));
// ese itny sary 0s ko read krna difficult hai , isi liye hm different countries k standards k hisab se kr skty hei , ab yahan indian standard k according 0s lg jayn gy

//Number.MIN_VALUE is not a function. It is a static property of the Number object in JavaScript.
//Static Property: Number.MIN_VALUE is accessed directly on the Number constructor, not on instances of the Number object. There are many other static properties also
console.log(Number.MIN_VALUE); // Outputs: 5e-324

let smallNumber = 1e-325;
console.log(smallNumber > Number.MIN_VALUE); // Outputs: false
console.log(Number.MAX_VALUE); // Outputs: 1.7976931348623157e+308

let largeNumber = 1.8e308;
console.log(largeNumber < Number.MAX_VALUE); // Outputs: false
let maxi = Number.MAX_VALUE;
let beyondMax = maxi * 2;
console.log(beyondMax); // Outputs: Infinity

let mini = Number.MIN_VALUE;
let belowMin = mini / 2;
console.log(belowMin); // Outputs: 0

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // log it in console and you will see mathematical constants and functions
// *********** CONSTANTS
// console.log("E: ", Math.E);
//*********** */ FUNCTIONS
// console.log(Math.abs(-4)); //absolute
// console.log(Math.round(4.6)); // round of
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // range from 0 (inclusive) to 1 (exclusive)

// Math.random()*100 => ranges between 0 (inclusive) and 100 (exclusive).
//Math.random() generates a random floating-point number between 0 and 1 (e.g., 0.538).
// Multiplying by 100 scales this number to be between 0 and 100 (e.g., 0.538 * 100 = 53.8).
console.log(Math.random() * 10 + 1);
//Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// Multiplying by 10 scales this number to be between 0 and 10 (exclusive).
// Adding 1 shifts this range to be between 1 and 11 (exclusive).
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Math.random(): Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

// Math.random() * 6: Multiplies the random number by 6, scaling the range to [0, 6) — meaning it can generate numbers from 0 to 5.9999...

// Math.floor(Math.random() * 6): Rounds down the result of Math.random() * 6 to the nearest integer, giving you a whole number between 0 and 5.

// Math.floor(Math.random() * 6) + 1: Adds 1 to the result of Math.floor(Math.random() * 6), shifting the range up by 1. This results in integers between 1 and 6 (inclusive).
