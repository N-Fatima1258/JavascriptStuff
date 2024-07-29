// loops can be applied to arrays , strings, objects 
// ["", "", ""]
// [{}, {}, {}]



// **** for of
// Syntax
// for (variable of iterable) {
//   // code to be executed for each element
// }
// variable: A different variable that will be assigned to each successive value of the iterable. It  will take on the value of each successive element from the iterable object during each iteration of the loop.
// iterable: An object that has iterable properties, such as an array, string, or any other object implementing the iterable protocol

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}



//******* Maps => an object. In maps values are unique and in the same order in which you write it (read it from mdn web docs)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
//agr oper destructure na kia or sirf const key of map likh dia to hr aik ka key value pair ajay ga in the following form ['IN', 'India']




// ANOTHER WAY 
let maps = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);
  
  for (let [key, value] of maps) {
    console.log(`${key}: ${value}`);
  }
  



// myObject is not iteratable. for of loop cannot be applied to iterate objects
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//objects do not have an iterator by default.

