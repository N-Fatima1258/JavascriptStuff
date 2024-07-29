const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // hitesh50 Value ,,, thi syntax is outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('hiteshhc')
console.log(typeof gameName) // object
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// check all methods by writing in console


// console.log(gameName.length);
 console.log(gameName.toUpperCase()); //HITESHHC ,,, 
 console.log(gameName); //hiteshhc
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // starts from index 0 then all the way through but not 4
// cannot give negative values in substring , it will ignoree
console.log(newString);

//can give negative values in slice
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim simply removes the unwanted spaces and line terminators



// const url = "https://hitesh.com/hitesh%20choudhary"
//browser do not understand spaces. It automatically converts the spaces into %20 in URL encoding

const url = "https://hitesh.com/hitesh%20choudhary"

// find %20 from the entire string and replace it with -
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // results into T or F. is pory URL mai 'sundar' word hai ya nhi .... 

const gameName = new String('hitesh-hc-com')
console.log(gameName.split('-')); //based on -(can be anything), split it. We will get an array 


// A string literal in JavaScript is a sequence of characters encl osed in single quotes ('), double quotes ("), or backticks (`). It represents a string value.

//     A template literal is a type of string literal that allows embedded expressions. Template literals are enclosed by backticks (`) instead of single or double quotes. They offer features such as string interpolation and multiline strings.
//         Features:
        
//         String Interpolation: Embedding expressions inside a string using ${expression} syntax.
//         Multiline Strings: Creating strings that span multiple lines without needing concatenation or newline characters.






// Without Template Literals (Using String Literals and Concatenation):
// let name = "Alice";
// let age = 25;
// let greeting = "Hello, my name is " + name + " and I am " + age + " years old.";
// console.log(greeting); // Outputs: Hello, my name is Alice and I am 25 years old.


// With Template Literals:
// let name = "Alice";
// let age = 25;
// let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(greeting); // Outputs: Hello, my name is Alice and I am 25 years old.

//String.prototype.toUpperCase

//  when you do const gameName = new String('hiteshhc');, the reference to the String object (gameName) is stored in the stack, while the actual String object is created and stored in the heap.


// It's important to know that in JavaScript, strings are immutable. This means that once a string is created, its contents cannot be changed. Instead, you must create a new string representing the modified version when you want to modify a string.

// String Primitive:
// let str = 'hello';
// let upperStr = str.toUpperCase();
// console.log(upperStr); // 'HELLO'
// console.log(str); // 'hello'

// String Object:
// let objStr = new String('hello');
// let upperObjStr = objStr.toUpperCase();
// console.log(upperObjStr); // 'HELLO'
// console.log(objStr); // [String: 'hello']

// When you call toUpperCase() on a String object or a string literal in JavaScript, it does not mutate the original string or String object. Instead, it returns a new string with the desired transformation (in this case, all uppercase letters). This is because strings in JavaScript are immutable, meaning their values cannot be changed after they are created.

// String Primitive
// Since string primitives are immutable, you cannot change their value directly. Instead, you would need to assign a new value to the variable.
let str = "hello";
console.log(str); // Outputs: "hello"

str = "world"; // Reassign the variable
console.log(str); // Outputs: "world"
// String Object
// For a String object, you can add properties or methods, but you still can't change the actual string value stored in the object directly because the string value itself is immutable. However, you can replace the String object with a new one.


let objStr = new String("hello");
console.log(objStr); // Outputs: [String: "hello"]
// Replacing the String object with a new one
objStr = new String("world");
console.log(objStr); // Outputs: [String: "world"]



// IMPORTANT ************
// have a look at all the strings method