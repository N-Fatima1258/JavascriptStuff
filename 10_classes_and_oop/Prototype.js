// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

// Direct Methods: Methods that are directly defined on an object. These methods are specific to the object and do not exist on its prototype.
// Prototype Methods: Methods that are defined on the prototype of an object. These methods are inherited by all instances that have this prototype in their prototype chain.

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    //direct method
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// apny seedha top level ki hirarchy (object)mai yh function add krdia 
// whether you declare an array , a string, all have acess to this (see what you have studied in object.js)
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
// if power is given to array, will that power is available in object? Prototypa ka kia hai, array mai power check key ga, agr nhi mili to aur oper object mai ja k dekhy ga , na mili to aur oper
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// // myHeros.hitesh()
// heroPower.getSpiderPower();
// myHeros.getSpiderPower(); //Error
// myHeros.heyHitesh()
// heroPower.heyHitesh() // => error: only array has the power not the object,functions and strings. oper valy level se power nichy askti hai but nichy se oper nhi ja skti

// ******************inheritance**************

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //prototypal inheritance: method 1
}
console.log(TASupport.isAvailable);
//prototypla inheritance : method 2
Teacher.__proto__ = User
console.log("Hi you")
console.log(Teacher.name)


//Prototypal inheritance,,, METHOD 3: modern syntax
//teachingsupport can access all the properties of teacher
// classes k ander thory keywords different hoty hei but behind the scenes, it is all prototypal inheritance (syntactic sugar)
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport.makeVideo)

//+++++++++++++++

let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);//is k ander ChaiAurCode ka reference hai. this =>Current context , jo bula rha hai, jisny call kia hai
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()



/*

object.js
prototype.js


 */











/*
The function createUser is a constructor function, while the function multipleBy5 is a regular function. Let's break down the differences:

Constructor Function
createUser Example:
javascript
Copy code
function createUser(username, score) {
  // The 'this' keyword refers to the new object being created

    this.username = username;
    this.score = score;
}
Purpose: Constructor functions are designed to create new objects. They act as blueprints for creating multiple instances of a similar object.
Usage: They are typically called with the new keyword, which creates a new instance of the object with the properties defined in the constructor.
this Keyword: Within a constructor function, this refers to the new object being created.
Example of usage:

javascript
Copy code
const user1 = new createUser('Alice', 100);
console.log(user1.username); // Alice
console.log(user1.score);    // 100

const user2 = new createUser('Bob', 200);
console.log(user2.username); // Bob
console.log(user2.score);    // 200
Regular Function
multipleBy5 Example:
javascript
Copy code
function multipleBy5(num) {
    let a = 8;
    return num * a;
}
Purpose: Regular functions are designed to perform a specific task, such as calculating a value or performing an operation. They return a value based on their input parameters.
Usage: They are called directly by their name with the required arguments.
this Keyword: Within a regular function, the this keyword refers to the context in which the function was called, which could be the global object (in non-strict mode), undefined (in strict mode), or an object if the function is a method of that object.


*/