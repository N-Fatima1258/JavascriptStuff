//  Primitive ,, all primitive data types are call by value ,,, reference nhi dia jata blk value ko copy kr k dia jata hai(ap jo bhi changings kro gy wo copy mai hun gi)

//  7 types : String, Number, Boolean, null, undefined, Symbol(kisi bhi value ko unique bnnay k liye), BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
console.log(typeof userEmail); // undefined

const id = Symbol("123");
const anotherId = Symbol("123");
// the value of id an anotherId is different. Even ythough you pass the same things (yhi to symbol ka kam hai)
console.log(id === anotherId); // false

const bigNumber = 3456543576654356754n;
//he n at the end of a number literal (like 3456543576654356754n) is used to denote a BigInt.
console.log(typeof bigNumber); // "bigint"

// Reference (Non primitive) ,,, memory mai inka reference apko allocate kia ja skta hai . in non primitive , reference will be copied instead of value
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};
// one way of writing functions
const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);
console.log(typeof myFunction);
// https://262.ecma-international.org/5.1/#sec-11.4.3

// how data is stored in memory and how that data is accessed from the memory. On this basis basis data is categorized into two : primitive and non-primitive
//Return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object
// In JavaScript, non-primitive data types such as objects, functions, and arrays are all of the type "object".
// typeof Operator: The typeof operator returns "object" for objects and arrays, and "function" for functions.
// Subtypes: Functions are considered a special subtype of objects, indicated by the typeof operator returning "function".

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness

//1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
//4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.
//5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null;

// **************** MEMORY **********************
// stack and heap
// stack(primitive), heap(non-primitive)
// jb bhi stack memory use hoti hai(ap already declared variable kisi dosry variable ko dety ho) to jo apny variable declare kia hota hai uski copy milti hai
// jb bhi heap mai define krty hei to original value ka reference milta hai , jo bhi change kryn gy wo original value mai hi hoga .... heap se jbv bhi ap reference lety hei to copy nhi milti, wapis se original value ka reference hi milta hai
let a = "blue";
let b = a; // a ki copy mili hai

b = "violet";
console.log(a); // blue
console.log(b); // violet

let user1 = {
  email: "m@gmail.com",
  username: "milli123",
};
let user2 = user1;
user2.email = "centi@gmail.com";
console.log(user1.email); //centi@gmail.com 
console.log(user2.email); //centi@gmail.com
// heap k ander jo bhi jay ga(heap k ander hjo bhi values rkhtyy hei ) uska reference hi milta hai
// non primitive stack k ander hi jaty hei or jb bhi ap stack se kuch lyn gy to apko uski aik copy hi milti hai

// ******************** IMPORTANT *****************
// in non primitive , reference will be copied instead of value. This is called shallow copy. in Shallow copy, a copy of the original object is stored and only the reference address is finally copied 
// in deep copy, the copy off the original object and the repetitive copies both are stored