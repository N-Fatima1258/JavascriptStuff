// array object
//must read mdn documentation
const arr = [0,1,2,"ali", 'b']
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // 9 array k start mai add hua hai or baki sari values aik step agy shift hui,,,, time consuming and load on computer
// myArr.shift()  // jo starting mai value dali thi (9), wo remove ho jay gi 
 
// console.log(myArr.includes(9));  // Is 9 included in the array (false)
// console.log(myArr.indexOf(3)); //3 3rd index py hai to answer is 3
// console.log(myArr.indexOf(13));// 13 value hai hi nhi to ans is -1

// The .join() method in JavaScript is used to concatenate all elements of an array into a single string. 

// SYNTAX :::
// array.join(separator)

// Using Default Separator (Comma):

const arrL = ['Hello', 'World'];
const result1 = arrL.join();
console.log(result1); // Output: "Hello,World" ,,, console mai wese yh strings walu  "" appear nhi hon gy

// Using a Space as a Separator:

const arrK = ['Hello', 'World'];
const resultJ = arrK.join(' ');
console.log(resultJ); // Output: "Hello World"

// Using a Dash as a Separator
const arrM = [1, 2, 3, 4, 5];
const result3 = arrM.join('-');
console.log(result3); // Output: "1-2-3-4-5"

// Key Points
// The .join() method does not modify the original array; it returns a new string.
// It can be used to easily convert an array to a string with custom separators, which is especially useful for creating readable strings from arrays.
// If the array has only one item, that item is returned as a string without any separators.
// If the array is empty, .join() returns an empty string.




// slice, splice
  
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr); 


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// slice does not change the original array. And (1,3) means, starts from 1 and all the way through but donot include 3

// splice change the original array. is mai wo pora splice wala part original array se exculde ho jata hai. And (1,3) means, starts from 1 and all the way through and also include 3


//JavaScript array-copy operations create shallow copies.
