// this => to refer to the current context . Like for scope, the current context will be everything inside {}


//When a function is called as a method of an object, this refers to the object that the method is called on.
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
      //  console.log(`${this.username} , welcome to website`);
      //  console.log(this); // jo bhi current values and variables hei unki bat krta hai. This will log the entire object
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()



//In the global execution context (outside of any function), this refers to the global object. In a web browser, this is typically the window object.
// inside browser, global object is window . in browser when you do console.log(this)=> the output will be window object , tb hi ap window k sary events capture kr paty hei (click , form submit etc)
// here in node , the following line will give {}
//console.log(this);




function two(){
    //console.log(this)// function  k ander this print kia ese to bht si values waghera output mai ayn gi
}
two(); 










// function chai(){
//     let username = "hitesh"
// console.log(this) // ot will give some sort of bht si values
//     console.log(this.username); //undefined => ese function k ander nhi use kr skty
// }

// chai()







// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //undefined
//     console.log(this) // bht si values
// }
// chai();





// Arrow functions do not have their own this context. Instead, they inherit this from the enclosing lexical context or the global context

const chai =  () => {
    let username = "hitesh"
    console.log(this.username); //undefined
    console.log(this); // {}
}
chai()


//*  Constructor Functions
// When a function is used as a constructor (with the new keyword), this refers to the newly created instance of the object.
function User(username) {
    this.username = username;
}
const newUser = new User("hitesh");
console.log(newUser.username); // "hitesh"




//* . Event Handlers
// In event handlers, this refers to the element that received the event.

// document.getElementById("myButton").addEventListener("click", function() {
//     console.log(this); // The button element
// });















// *************** Arrow Functions *****************


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// * implict return  => refers to the feature of arrow functions where, if the function body consists of a single expression, the value of that expression is automatically returned without needing to use the return keyword.
// const addTwo = (num1, num2) =>  num1 + num2


// * agr curly braces mai likha to return statement likhna pry ga
// const addTwo = (num1, num2) => ( num1 + num2 )



// object ko return krny k liye braces use krni hi pryn gi
// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))

 
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})



















// const user = {
//     username: "hitesh",  // Property `username` with value "hitesh"
//     price: 999,          // Property `price` with value 999

//     // Method `welcomeMessage` defined as a function expression
//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to the website`);
//         console.log(this);
//     },

//     // Shorthand method syntax (ES6+)
//     goodbyeMessage() {
//         console.log(`Goodbye, ${this.username}`);
//     }
// };