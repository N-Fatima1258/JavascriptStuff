

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//arrays in js kisi bhi type ka data ly lety hei. Thats why nichy wali statement ny pory dc_heroes array ko as a single element ly lia hai . marvel heroes mai dc_heroes 3rd index py hoga hoga
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // 3rd index py element jok aik array hai usk 1 index wla elemet => flash






// push original array py hi krta hai but .concat => Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// *****************SPREAD OPERATOR

// Combining Arrays:
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// Copying an Array:
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // Output: [1, 2, 3]

// Adding Elements to an Array:
const arr11 = [1, 2, 3];
const arr22 = [0, ...arr11, 4];
console.log(arr2); // Output: [0, 1, 2, 3, 4]


// *************.flat => This method is particularly useful for flattening nested arrays.
// 5. **Flattening an Infinitely Nested Array:**

// To flatten an array of any depth, you can pass `Infinity` as the depth:
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
 const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // sb eleemnts ko aik hi array mai de dy ga

// The `.flat()` method in JavaScript is used to flatten arrays, i.e., it transforms a nested array into a flat array, by removing any nested arrays and concatenating their elements to the parent array. This method helps simplify working with nested data structures, making it easier to process and iterate over array elements.

// ### Syntax

// ```javascript
// array.flat(depth)
// ```

// - `array`: The array to flatten.
// - `depth` (optional): Specifies the depth level of nested arrays to flatten. The default is `1`.

// ### Examples

// 1. **Flattening a One-Level Nested Array:**

// ```javascript
const arrO = [1, 2, [3, 4]];
const flattenedT = arrO.flat();
console.log(flattenedT); // Output: [1, 2, 3, 4]
// ```

// 2. **Flattening a Two-Level Nested Array:**

// ```javascript
const arrP = [1, 2, [3, 4, [5, 6]]];
const flattenedY = arrP.flat(2);
console.log(flattenedY); // Output: [1, 2, 3, 4, 5, 6]
// ```

// 3. **Using the Default Depth:**

// By default, `.flat()` flattens one level deep:

// ```javascript
const arrQ = [1, 2, [3, 4, [5, 6]]];
const flattenedU = arrQ.flat();
console.log(flattenedU); // Output: [1, 2, 3, 4, [5, 6]]
// ```

// 4. **Flattening an Array with Empty Slots:**

// Empty slots are removed when the array is flattened:

// ```javascript
const arrR = [1, 2, , 4, 5];
const flattenedP = arrR.flat();
console.log(flattenedP); // Output: [1, 2, 4, 5]
// ```



// ```javascript
const arrS = [1, [2, [3, [4, [5]]]]];
//levels concept 1   2   3   4
const flattenedK = arrS.flat(3);
console.log(flattenedK); // Output: [ 1, 2, 3, 4, [ 5 ] ]
// ```

// ### Key Points

// - The `.flat()` method returns a new array and does not modify the original array.
// - It flattens nested arrays up to the specified depth.
// - If no depth is provided, it flattens only one level deep.
// - Empty slots (uninitialized elements) are removed from the flattened array.
// - The method simplifies handling of nested arrays, making code more readable and operations more straightforward.

// ### Browser Compatibility

// The `.flat()` method is supported in modern browsers and Node.js versions. For compatibility with older browsers, consider using a polyfill or alternative methods like recursion to flatten arrays.



const another_array1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
 const real_another_array1 = another_array1.flat(1)
console.log(real_another_array1); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

const another_array11 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5],[9,6,[7,4,5]]]]
 const real_another_array11 = another_array11.flat(2)
console.log(real_another_array11);  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, 9, 6, [ 7, 4, 5 ] ]

const another_array12 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5],[9,6,[7,4,5]]]]
// level concept:                 1             1      2      2    3
 const real_another_array12 = another_array12.flat(3)
console.log(real_another_array12); // flattens the entire array




















//data scraping

//**********  isArray=>It correctly identifies arrays created with literal syntax ([]), array constructors (new Array()), and arrays created from other arrays (e.g., Array.from()).
console.log(Array.isArray("Hitesh"))

//**************** 
console.log(Array.from("Hitesh")) // converts "Hitesh" into an array
console.log(Array.from({name:  "hitesh"})) // yh array nhi bna pay ga so it will give empty array []  ,,, When Array.from() receives { name: "hitesh" }, it attempts to convert it into an array. Since { name: "hitesh" } is not iterable, Array.from() doesn't find any elements to iterate over and thus returns an empty array ([]).
// The output of Array.from({ name: "hitesh" }) is [] (an empty array) because the Array.from() method expects its first argument to be an iterable object or an array-like object.


// In JavaScript, the `.from()` method is used with arrays to create a new array instance from an array-like or iterable object. Here's how it works:

// 1. **Creating an Array from an Array-like Object:**
//    - An array-like object is an object that has a length property and indexed elements, but it's not necessarily an array (e.g., NodeList returned by `document.querySelectorAll()`).
//    - `.from()` can convert such objects into a real array. For example:
//      ```javascript
//      const arrayLike = { 0: 'a', 1: 'b', length: 2 };
//      const newArray = Array.from(arrayLike); // ['a', 'b']
//      ```

// 2. **Creating an Array from an Iterable Object:**
//    - Iterable objects are objects that implement the iterable protocol (like arrays or strings).
//    - `.from()` can convert these objects into arrays by iterating over them. For example:
//      ```javascript
//      const iterableString = 'hello';
//      const newArray = Array.from(iterableString); // ['h', 'e', 'l', 'l', 'o']
//      ```

// 3. **Mapping Functionality:**
//    - `.from()` can also take a second argument, a mapping function, which allows you to modify each element during the creation of the new array:
//      ```javascript
//      const newArray = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
//      ```

// 4. **Use Cases:**
//    - Converting NodeList or other array-like objects obtained from the DOM into real arrays for easier manipulation.
//    - Transforming strings or other iterables into arrays to perform array methods like `map`, `filter`, etc., which are not directly available on iterables.

// Overall, `.from()` provides a convenient way to create arrays from various types of data sources in JavaScript.








//****************** .of => Provides a straightforward way to create arrays with specific elements without using array literals ([]).
// Ensures that each argument passed to .of() becomes an element in the resulting array, even if the argument is undefined or null


let score1 = 100
let score2 = [1,2,3,4]
let score3 = 300

console.log(Array.of(score1, score2, score3)); //o/p : [ 100, [ 1, 2, 3, 4 ], 300 ]

const arr1a = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
const arr2a = Array.of('a', 'b', 'c'); // ['a', 'b', 'c']
const arr3a = Array.of(); // [] (empty array)
const arr4a = Array.of(1,"abs", null , undefined)

console.log(arr1a)
console.log(arr2a)
console.log(arr3a)
console.log(arr4a)

//************
// When Array is called as a function rather than as a constructor, it creates and initialises a new Array object. Thus the function call Array(…) is equivalent to the object creation expression new Array(…) with the same arguments.
// "Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7"
// When called with a single numeric argument (new Array(3) or Array(3)), both create an array with that many empty slots filled with undefined. 
// 3 empty slots => Output: [undefined, undefined, undefined]
const arr4 = Array(3); // Creates an array with 3 empty slots
console.log(arr4) // [ <3 empty items> ]
const arr8 = new Array(3)
console.log(arr8) // [ <3 empty items> ]
const arr5 = Array(1, 2, 3); // Creates an array with elements [1, 2, 3]
console.log(arr5)
const arr9 = new Array(1, 2, 3); 
console.log(arr9) //  [1, 2, 3]

const arr41 = Array(); // Creates an array with 3 empty slots
console.log(arr41) //[]
const arr83 = new Array()
console.log(arr83)//[]



