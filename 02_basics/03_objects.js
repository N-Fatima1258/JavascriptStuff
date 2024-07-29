// two ways of declaring objects => singleton , literals

// **** * singleton => jb bhi constructor se bnaty hei to singleton onject bnta hai(means yh apny trah ka aik hi object hai)
// Object.create => constructor (singleton)

//***** object literals => yh singleton nhi hota, is k multiple instances bn jaty hei


// add symbol in object keys and print => interview question
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh", // system isko "name" (string) ki trah hi process krta hai but apisko ese likhty nhi ho usually 
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // correct way to refer to symbol (now it is a symbol key), agr sirf mySum likho gy to wo normal (string) hi treat hoga
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//** 2 ways of accessing  */
// console.log(JsUser.email)

// console.log(JsUser["email"]) //backend py string ki trah hi treat hota hai isi liye string ki trah likha hai ("email"), wese yh (email) error dy ga
// console.log(JsUser["full name"]) // you cannot access "fullname" by . method
 console.log(JsUser[mySym]) // otput: myKey1 => correct way
 console.log(JsUser["mySym"]) // undefined
 console.log(JsUser.mySym) // undefined

 console.log(typeof JsUser[mySym]); // typeof mySym would be "symbol" because mySym is a symbol.
// typeof JsUser[mySym] is "string" because the value associated with the key mySym is a string.





 //*******
 // Create a symbol
const mySymbol = Symbol('mySymbol');

// Create an object with a symbol key
const myObject = {
  [mySymbol]: 'This is a value associated with a symbol key',
  regularKey: 'This is a regular key',
  regularKey2: 'Second key'
};

// Access and print the symbol key value
console.log(myObject[mySymbol]); // Output: This is a value associated with a symbol key
console.log(myObject.regularKey); // Output: This is a regular key

const keys = Object.keys(myObject);
console.log('Regular keys:', keys); // Output: Regular keys: ['regularKey', 'regularKey2']

const symbolKeys = Object.getOwnPropertySymbols(myObject);
console.log('Symbol keys:', symbolKeys); // Output: Symbol keys: [ Symbol(mySymbol) ]

symbolKeys.forEach(sym => {
  console.log(`Symbol key: ${sym.toString()}, value: ${myObject[sym]}`);
  // Output: Symbol key: Symbol(mySymbol), value: This is a value associated with a symbol key
});

// * Uniqueness:

// Every symbol is unique. Even if you create multiple symbols with the same description, they will not be equal.
// This guarantees that symbol keys will not collide with other keys, avoiding unintended overrides or conflicts.

// * Hidden Properties:

// Symbol properties are not enumerable by default. They do not show up in for...in loops or Object.keys().
// This makes symbols useful for adding private properties to objects, which should not be easily discoverable.

// * Avoiding Key Collisions:

// When you are working with objects that might receive additional properties from multiple sources (such as plugins or extensions), using symbols can ensure that the new properties do not collide with existing ones.


// const pluginData = Symbol('pluginData');
// const obj = {
//   name: 'Object Name',
//   [pluginData]: { data: 'some plugin data' }
// };

// // No conflict with existing properties
// console.log(obj[pluginData]); // Output: { data: 'some plugin data' }




JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // ab JsUSer object k ander koi value change nhi hoskti
JsUser.email = "hitesh@microsoft.com" //Error nhi ay ga lykin value change nhi ho gi
// console.log(JsUser);


//*********** JavaScript's dynamic nature, allowing objects to be modified by adding new properties or methods after their initial creation.
JsUser.college = "punjab";
console.log(JsUser);




JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello JS user   undefined ,,,, agr function k ander kuch return likh dety to undefined ki jagah wo return hota

console.log(JsUser.greetingTwo());

JsUser.greeting(); // Hello JS user
JsUser.greetingTwo();

// In JavaScript, if a function does not return a value using the return statement, it implicitly returns undefined.

// "Cracking the Coding Interview" by Gayle Laakmann McDowell, "Elements of Programming Interviews" by Adnan Aziz.