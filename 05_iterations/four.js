// ******** for in loop

// ***object
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// object ko create hi isi liye kiya gaya tha,, kio k array mai keys 0 se start hoti hei or by default number hi hoti hei. Lykin objects mai jo mrzi key ap bna skty ho

// **array
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key) // index of array
    //console.log(programming[key]);
}



// **  map 
// we cannot apply for in loop on maps
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


// The differences in applying `for...of` and `for...in` loops to objects and maps stem from how these loops are designed and how objects and maps are structured in JavaScript.

// ### Why `for...of` Cannot Be Applied to Objects

// The `for...of` loop is designed to work with iterable objects. An iterable is an object that implements the `Symbol.iterator` method, which returns an iterator object. This iterator object adheres to the iteration protocol, which defines how values are iterated.

// Plain objects in JavaScript do not implement the `Symbol.iterator` method by default, making them non-iterable. As a result, you cannot use `for...of` directly on plain objects.

// ### Example
// ```javascript
// const obj = { a: 1, b: 2, c: 3 };

// for (const value of obj) {
//   console.log(value); // TypeError: obj is not iterable
// }
// ```

// To iterate over the properties or values of an object, you can use `Object.keys()`, `Object.values()`, or `Object.entries()` to create an iterable from the object, and then use `for...of`.

// ### Example
// ```javascript
// const obj = { a: 1, b: 2, c: 3 };

// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value); // Output: "a 1", "b 2", "c 3"
// }
// ```

// ### Why `for...in` is Not Suitable for Maps

// The `for...in` loop iterates over the enumerable properties (keys) of an object, including those inherited from its prototype chain. It is designed to be used with plain objects and can iterate over all enumerable properties.

// Maps in JavaScript are a specific kind of object that store key-value pairs, but they do not use enumerable properties in the same way plain objects do. The keys and values in a Map are stored in an ordered list, and Maps implement the `Symbol.iterator` method, making them iterable.

// Using `for...in` on a Map does not work as expected because Maps are not designed to expose their keys as enumerable properties in the same way as plain objects. Instead, you should use `for...of` to iterate over Maps, which allows you to access their key-value pairs directly.

// ### Example
// ```javascript
// const map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// for (const key in map) {
//   console.log(key); // Does not produce any output because map does not have enumerable properties
// }

// for (const [key, value] of map) {
//   console.log(key, value); // Output: "a 1", "b 2", "c 3"
// }
// ```

// ### Summary
// - **`for...of`**:
//   - Works with iterable objects (those implementing `Symbol.iterator`), such as arrays, strings, maps, and sets.
//   - Does not work with plain objects because they are not iterable by default.

// - **`for...in`**:
//   - Works with plain objects to iterate over their enumerable properties (keys).
//   - Not suitable for Maps because Maps store key-value pairs in an ordered list and do not expose keys as enumerable properties.

// Understanding these differences helps you choose the appropriate loop for the data structure you are working with.







// DIFFERENCE +++++++++++++++++++++++
// for...in:

// Iterates over enumerable property names (keys) of an object.
// Suitable for objects.
// Can be misleading for arrays because it also iterates over inherited properties.

// for...of:

// Iterates over the values of an iterable object.
// Suitable for arrays, strings, maps, sets, etc.
// Cannot be used directly with plain objects.