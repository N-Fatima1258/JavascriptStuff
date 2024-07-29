// ******** Object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        // in following, if you write only username then it will through an error(remember that v8 and execution context example)....function execution context bhi to bna tha. and you didnt tell whether to take username from its context or from global context
        console.log(`Username: ${this.username}`);
        console.log(this);// current context (oper function ko bola k is current context se jak value lo)
            }
}
//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); //=> current context  : global context.
// kuch situations mai hmyn naya instance hi chaiye hota hai, purani values ko effect mat kro, apna apna context rakho. It helps to make a new  context





// new keyword => It is a constructor function. It allows to create multiple instances from a single object literal
//The User function is a constructor function. It is designed to be called with the new keyword to create new instances of User.


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
     // if you donot write the following line, it doesnt matter becz (this) is returned implicitly
    return this
}
// agr userone or userTwo new keywork k without bnay and then we log(userOne) to output mai userTwo wla data show hoga becz overWrite ho gaya. Agr new keyword nhi likha to sath mai or bhi bht si cheezyn print ho  jayn gi.Thats why, we write this keyword

/* 
1)when you use new keyword , an empty object is created
2) a constructor function is called because of new keyword. Jitny bhi arguments hoty hei yh usk ander pack krta hai or apko de deta hai
3) the arguments which you have written are all injected in (this) keyword

*/


const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);// logs the constructor User
//console.log(userTwo);
console.log(userOne instanceof User);
console.log(userOne instanceof Object);//The line console.log(userOne instanceof Object); logs true because userOne is an instance of User, and User is a function whose prototype is an object that ultimately inherits from Object.prototype. This makes userOne an instance of Object as well.



// In a Node.js environment, the value of this can vary depending on the context in which it is used => READ MORE ABOUT IT

//JavaScript Prototypes
// Before ES6 classes, JavaScript used prototypes to achieve inheritance and object-oriented behavior. Every object in JavaScript has a prototype, and objects inherit properties and methods from their prototype.



/*

How It Works
Creating an Object: When you call new User("hitesh", 12, true), JavaScript performs the following steps:

Creates a new, empty object.
Sets the prototype of the new object to User.prototype.
Executes the User function with this bound to the new object, initializing its properties and methods.
Returning the Object: The new keyword ensures that this inside the User function refers to the new object. After execution, the new object is returned.
 */