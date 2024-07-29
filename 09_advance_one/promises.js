//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


//create promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // now it is connected to (.then) . pehly async task complete hua or phir jese hi resolve hua to (Promise consumed) display hua. Promise consumed pehly kbhi bhi nhi diplay hoga
    }, 1000)
})

//consume promise. (.then) has direct connection with resolve
promiseOne.then(function(){
    console.log("Promise consumed");
})



// +++ METHOD # 2 +++
// to store it in a variable is not necessary
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");//jb yh wla task complete ho jay ga tb resolve() .then ko inform kr dy ga k ab kam krlo
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// ++++++ passing data through resolve
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// +++++


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
//chaining: lower .then will receive the value returned by upper .then
// if reject then catch block will execute. if resolve then (then) blocks will execute. Finally will always execute
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


//+++++++
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong***')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// ++++++++++++++++++++

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

//+++++++++++++++++++ fetch is executing first. The entire code, even settimeout is executing later
// the fetch function already returns a promise. When using built-in functions or APIs that return promises, there is no need to create an explicit promise using new Promise. The promise-based API (like fetch) simplifies the code by directly returning a promise that can be handled using .then, .catch, or async/await.

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// above are all directly creating a promise

//Function Returning a Promise : to create a function that returns a new promise each time it is called. This approach allows you to invoke the fetchData function multiple times, each time getting a fresh promise.

let fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = true;
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 1000);
    });
  };
  
  // Usage
  fetchData().then((message) => console.log(message)).catch((error) => console.log(error));
  fetchData().then((message) => console.log(message)).catch((error) => console.log(error));
  





  // ++++++++
  let fetchData1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = true;
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 1000);
    });
  };
  
  async function getData() {
    try {
      let message = await fetchData1();
      console.log(message);
      message = await fetchData1(); // Await another promise
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  }
  
  getData();
  







// promise.all
// yes this is also available, kuch reading aap b kro.





//Promise: jo bhi apny usko task dia hai wo abhi k abhi queue mai lg k complete nnhi hoga. queue mai to lg gaya hai lykin abhi k abhi usko load nhi kia gaya hai , abhi wo complete nhi hua

// promise or asyn/await
// can handle promise through then catch or tey catch


//The fetch API is finally coming to node.js +> READ ARTICLE ON LOGROCKET
//Fetch API was launched as a modern successor to XMLHttpRequest        
// promise se aik request ki or wahan se aik error agaya 404, wo apko resolve mai mily ga ya reject mai? Wo apko hamesha response mai hi mily ga, wo error nhi hai, error sirf tb hoga jb browser request kr hi nhi paya

// What is a Promise?
// A promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
//A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
//resolve and reject are callback functions because they are passed into the executor function and invoked based on the result of the asynchronous operation.



/*
********************

async/await
async and await are syntactic features in JavaScript that allow you to work with promises in a more synchronous-looking manner, making the code easier to read and write.

async Function:

Declaring a function as async ensures that it returns a promise.
Inside an async function, you can use await to pause the execution of the function until the promise is resolved or rejected.
Example with async/await:

javascript
Copy code
// Declaring an async function
async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

// Calling the async function
fetchData();
Explanation:

await fetch(...) pauses the execution of fetchData until the fetch promise is resolved.
The result of the promise is assigned to response.
await response.json() pauses execution until the .json() promise is resolved and assigns the result to data.
If any promise is rejected, the catch block handles the error.

*/