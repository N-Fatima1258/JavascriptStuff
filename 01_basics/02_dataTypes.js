"use strict"; // treat all JS code as newer version ,,, your code will be treated as new standards through engine

// alert( 3 + 3) // we are using nodejs, not browser ,,  to use atert in node.js, there is a different syntax

console.log(3 + 3); // code readability should be high

console.log("Hitesh");

let name = "hitesh";
let age = 18;
let isLoggedIn = false;
let state;

// number => The Number type is a double-precision 64-bit binary format IEEE 754 value. It is capable of storing positive floating-point numbers between 2-1074 (Number.MIN_VALUE) and 21024 (Number.MAX_VALUE) as well as negative floating-point numbers between -2-1074 and -21024, but it can only safely store integers in the range -(253 − 1) (Number.MIN_SAFE_INTEGER) to 253 − 1 (Number.MAX_SAFE_INTEGER).

// bigint
// string => ""
// boolean => true/false
// null => standalone value   ,,, let temperature = null;
// undefined => value is not assigned yet
// symbol => unique ,, to identify that this component is unique from this ,,, in order to find uniqueness
// above are all primitive dara type

// object
console.log(typeof age); // number
console.log(typeof "everything"); // string
console.log(typeof undefined); // undefined ,,, means undefined is a type in itself
console.log(typeof null); // object ,,, some people say that it is the drawback of JS language
