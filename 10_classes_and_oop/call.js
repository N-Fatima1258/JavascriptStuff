function SetUsername(username){
    //complex DB calls
    console.log(this)
    this.username = username
    console.log("called");
} 

function createUser(username, email, password){
    // SetUsername( username) // jese hi yh call hua iska execution context bhistack se ht gaya or isk ander jitny variables thy wo bhi gay(outer function createUser pr kbhi phnchy hi nhi). 
// SetUsername.call(username) //function run to horha hai lykin reference hold krwana(variables jo declare huy hei, jo bhi function call hui hai etc) wo bhi to chahiye. isi liye apko execution context dena pry ga


    SetUsername.call(this, username) // we are asking SetUSername that donot use your (this), i will give you my (this)
   
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")


console.log(chai);
console.log("iota")
/*

Function .call Method
The .call method allows you to call a function with a specific this context. It takes two arguments:

The value to use as this when calling the function.
The arguments to pass to the function.
SetUsername.call(this, username) Explanation
When you call SetUsername.call(this, username) inside the createUser constructor function, you explicitly set the value of this inside SetUsername to be the instance of createUser that is being constructed
 */


/*

When new createUser("chai", "chai@fb.com", "123") is called, it does the following:
Creates a new object (let’s call it obj).
Sets the prototype of obj to createUser.prototype.
Executes the createUser function with this pointing to obj.

(this) inside createUser refers to the new object (obj).
SetUsername.call(this, username) calls SetUsername with this set to obj and username set to "chai"



*/

//SetUsername.call(this, username) would bind SetUsername to this (the object being constructed), making this.username = username set username on the new instance.


/*
By using SetUsername.call(this, username), you ensure that the SetUsername function operates on the newly created instance of createUser. This binds this inside SetUsername to the instance (obj), allowing this.username = username to correctly set the username property on the instance rather than on the global object.
 */

