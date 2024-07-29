// ******** TRUTHY
// const userEmail = "H@me@gamil.com"
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }




//******* FALSY */
// const userEmail = ""
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }





//  ****** TRUTHY
// const userEmail = []
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }




// ********* falsy values *********
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//********* truthy values **********
// "0", 'false', " ", [], {}, function(){}

// EMPTY FUNCTION => no parameter, no execution code =>  function(){}


// *** TRUTHY
// if (function(){}) {
//     console.log("Array is empty");
// }





// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }






// ********** way to check empty array
const userEmail = []
if(userEmail.length === 0){
    console.log("Array is empty");
}


// ************ way to check empty object
//Object.keys() => this will give us an array
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}





// **false === 0
// false
// **false === ''
// false
// **0 === ''
// false
// **false == 0
// true
// **false == ''
// true
// **0 == ''
// true




// ***** Nullish Coalescing Operator (??) => all stroy is around null undefined. The Nullish Coalescing Operator (??) in JavaScript is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined. If the left-hand operand is not null or undefined, it returns the left-hand operand. This operator provides a way to handle default values without treating 0, NaN, or "" (empty string) as falsey values, unlike the || (logical OR) operator.The Nullish Coalescing Operator is a powerful tool in JavaScript for handling default values in a way that is more precise and avoids common pitfalls associated with falsy values. USAGE: jb ap database se call kry gy to directly apko response nhi milta, apko 2 values milti hei. Chance hei null response ya ya undefined ay. To hum isko isi liye use krty hei k agr null ay to null assign krdo, undefined ay to undefined , value ay to value assign krdo

let val1;
//val1 = 5 ?? 10  // 5
//val1 = null ?? 10   // 10 
// val1 = undefined ?? 15  // 15
val1 = null ?? 10 ?? 20 // 10
console.log(val1);



//***  Difference from Logical OR (||)
// The || operator returns the right-hand operand when the left-hand operand is a falsy value (false, 0, NaN, "", null, undefined).
// let user = "";
// let defaultUser = "Guest";
// let currentUser = user || defaultUser;
// console.log(currentUser); // "Guest" because "" is falsy


//*** With the ?? operator:
let user = "";
let defaultUser = "Guest";
let currentUser = user ?? defaultUser;
console.log(currentUser); // "" because "" is not null or undefined


function greet(name) {
    console.log(`name is ${name}`)
    name = name ?? "Guest";
    console.log("Hello, " + name);
}
// in the following function call, no parameter is passed so name is (undeined)
greet(); // "Hello, Guest"
greet("Alice"); // "Hello, Alice"



// ** In this example, the ?? operator evaluates from left to right and returns the first non-null, non-undefined value.
let a = null;
let b = undefined;
let c = "Hello";
let result = a ?? b ?? c ?? "Default";
console.log(result); // "Hello"



// ***Precedence and Grouping
// The ?? operator has lower precedence than most operators, but higher than the assignment operator (=). When combining it with other operators, you might need to use parentheses to ensure the correct order of evaluation.
let x = null;
let y = 5;
let z = 10;
let result1 = x ?? y + z; // result is 15 because + has higher precedence than ??
console.log(result1); // 15
let result2 = (x ?? y) + z; // result2 is 15 because (x ?? y) is evaluated first
console.log(result2); // 15






//****** Terniary Operator
// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




