if (true) {
    let a = 10
    const b = 20
    var c = 30
    }
// console.log(a); // error
// console.log(b);  //error
console.log(c);  // output: 30
// var c is not block scoped; it is either function scoped or globally scoped. Since there is no function in this case, var c is hoisted to the global scope. This is why console.log(c) outputs 30 without error.










// var c = 300
// if (true) {
//     let a = 10
//     const b = 20
//     c = 30;    
// } 
// console.log(c) // output: 30









// scope is different in console of chrome dev tools and it (global scope) is different in node environment








function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // yeh cannot access it here
     two()
    }
// one()





if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //error
}
// console.log(username); //error





// ++++++++++++++++++ interesting ++++++++++++++++++

// agr ap function declaration waly method se function create krty hei to ap function ko uski definition se pehly bhi access krskty hei
console.log(addone(5))
//this method of declaring a function is called :  function declaration. 
function addone(num){
    return num + 1
}



// function expression: A function expression is a function that is assigned to a variable.
// function(num) { return num + 2; } is an anonymous function because it has no name.
// The entire function is assigned to the variable addTwo.
// addTwo is the name of the variable that holds the function (function definition).
// When you use console.log(addTwo(5)), you are calling the function stored in addTwo with the argument 5, which returns 7 and logs it to the console.
// If you do console.log(addTwo), it will log the function itself, not the result of any function call.



//agr ap function expression waly method se function create krty hei to ap function ko uski definition se pehly usko access NHIIIII krskty hei
//console.log(addTwo(5)) // error
const addTwo = function(num){
    return num + 2
}



// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope(function or global) during the compilation phase before the code is executed. This means that variables and functions can be used before they are actually declared in the code.



// Scope Differences
// var:

// var is either globally scoped (if declared outside a function) or function scoped (if declared within a function).
// It is not block scoped, meaning it ignores block boundaries created by {}.
// let and const:

// Both let and const are block scoped.
// They are only accessible within the block in which they are defined, and not outside of it.

// *****var
// Scope: The scope of a variable declared with var is either global or local to the entire function in which it is declared.
// Hoisting: Variables declared with var are hoisted to the top of their scope (mtlb scope k ander hi lykin top py) and initialized with undefined. This means you can use the variable before its declaration in the code, but it will be undefined until the actual declaration is encountered.
// Re-declaration: You can re-declare variables declared with var within the same scope.



console.log(x); // undefined
var x = 10;
console.log(x); // 10
var x = 200;
console.log(x) //200

function foo() {    
console.log(y) //undefined
  var y = 20;
  console.log(y); // 20
}
foo();
//console.log(y); // ReferenceError: y is not defined








// another example

// console.log(x); // undefined
// var x = 10;
// console.log(x); // 10

// In the example above, the declaration of x is hoisted to the top, but the assignment x = 10 is not. So, the above code behaves as if it were:

// var x;
// console.log(x); // undefined
// x = 10;
// console.log(x); // 10




// *let
// Scope: The scope of a variable declared with let is block-scoped, meaning it is limited to the block, statement, or expression where it is used.
// Hoisting: Variables declared with let are also hoisted to the top of their block, but they are not initialized. Accessing the variable before its declaration results in a ReferenceError.
// Re-declaration: You cannot re-declare a variable declared with let in the same scope.


//Outside the block, a is not accessible at all, so accessing it also results in a ReferenceError.
{ 
   // console.log(a); // reference error
    let a = 10;
    console.log(a); // 10
  }
  //console.log(a); // ReferenceError: a is not defined
  
  let b = 20;
  b = 30; // This is allowed
  //let b = 40; // SyntaxError: Identifier 'b' has already been declared





//   *const
//   Scope: The scope of a variable declared with const is also block-scoped.
//   Hoisting: Variables declared with const are hoisted to the top of their block, but they are not initialized. Accessing the variable before its declaration results in a ReferenceError.
//   Re-declaration and Re-assignment: Variables declared with const cannot be re-declared or re-assigned. However, if the variable is an object or array, the contents of the object or array can be modified.
  
{
    const c = 10;
    console.log(c); // 10
    //c = 20; // TypeError: Assignment to constant variable.
  }
  //console.log(c); // ReferenceError: c is not defined
  
  const d = [1, 2, 3];
  d.push(4); // This is allowed
  console.log(d); // [1, 2, 3, 4]
  
  const e = { name: 'Alice' };
  e.name = 'Bob'; // This is allowed
  console.log(e); // { name: 'Bob' }
  


//   Hoisting of Functions
// Function Declarations:

// Function declarations are hoisted to the top of their containing scope (global or function scope(agr kisi or functoion k ander ho)). This means you can call a function before its declaration in the code.

foo(); // "Hello"
function foo() {
    console.log("Hello");
}

//The function declaration is hoisted to the top, so the code behaves as if it were:

function foo() {
    console.log("Hello");
}
foo(); // "Hello"



// Function Expressions:

// Function expressions are not hoisted. This means that the variable holding the function expression is hoisted, but the function assignment is not.

bar(); //TypeError: bar is not a function
console.log(bar); // undefined
var bar = function() {
    console.log("World");
};
bar(); // "World"


// Here, the variable bar is hoisted and initialized with undefined, but the function assignment happens at the original line in the code.