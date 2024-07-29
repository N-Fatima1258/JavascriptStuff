// // const tinderUser = new Object() // singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);


// //******************* Object.assign

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}
 
// // const obj3 = { obj1, obj2 }
// // console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)
// const obj5 = Object.assign(obj1, obj2, obj4)
// console.log(obj5)
// console.log(obj1)
// console.log(obj2)
// console.log(obj4)

// // Object.assign is a method in JavaScript used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

// // Here’s the syntax:
// // Object.assign(target, ...sources)

// // Description:
// // Object.assign performs a shallow copy of properties from source objects to the target object. Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties will similarly overwrite earlier ones.

// // Example:

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(returnedTarget); // { a: 1, b: 4, c: 5 }
// console.log(target); // { a: 1, b: 4, c: 5 } - target is also modified

// // Notes:
// // Shallow Copy: Object.assign copies property values. If the source value is a reference to an object, it only copies the reference value.

// const target1 = { a: 1 };
// const source1 = { b: { c: 2 } };

// Object.assign(target1, source1);

// source1.b.c = 3; // This change will reflect in target
// console.log(target1.b.c); // 3


// // Merging Objects: Object.assign is often used to merge objects.
// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = { c: 3 };

// const mergedObject = Object.assign({}, o1, o2, o3);
// console.log(mergedObject); // { a: 1, b: 2, c: 3 }



// // Handling Null and Undefined: If any of the source objects are null or undefined, they are ignored.

// const target2 = { a: 1 };
// const source2 = null;
// const returnedTarget2 = Object.assign(target2, source2);

// console.log(returnedTarget2); // { a: 1 }






//************** spread operator in OBJECTS

// Shallow Copy
// A shallow copy of an object is a copy where the top-level properties are copied, but nested objects are not copied. Instead, the references to the nested objects are copied. This means that if the nested object is modified in the copied object, the changes will also reflect in the original object, and vice versa.

// Deep Copy
// A deep copy of an object means that all levels of the object are copied, including nested objects. Changes to the nested objects in the copied object will not affect the original object.


//Merging Objects
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// Creating a Shallow Copy of an Object
// You can create a shallow copy of an object using the spread operator.

const original = { a: 1, b: 2 };
const copy = { ...original };

console.log(copy); // { a: 1, b: 2 }
console.log(copy === original); // false - copy is a new object
original.b=9;
console.log(copy); //{ a: 1, b: 2 }

//Adding/Overriding Properties
// You can add new properties or override existing ones by placing them after the spread operator.
const obj = { a: 1, b: 2 };
const updated = { ...obj, b: 3, d: 5 };

console.log(updated); // { a: 1, b: 3, d: 5 }
console.log(obj) //{ a: 1, b: 2 }

// Nested Spread
// The spread operator only performs a shallow copy. This means if an object contains another object, the nested object will not be deeply copied.
const nestedObj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...nestedObj };

nestedObj.b.c = 3;
nestedObj.a=99;
console.log(nestedObj) //{ a: 99, b: { c: 3 } }
console.log(shallowCopy) //{ a: 1, b: { c: 3 } }
console.log(shallowCopy.b.c); // 3 - nested object is not deeply copied


// Updating Objects
// You can create an updated version of an object by spreading the original and then specifying the changes.


const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, age: 26 };

console.log(updatedUser); // { name: 'Alice', age: 26 }
console.log(user) //{ name: 'Alice', age: 25 }














const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

//the Object.keys() method returns an array of a given object's own enumerable property names.
//  when you use typeof to check the type of Object.keys(tinderUser), it returns "object" instead of "array." This is because in JavaScript, arrays are a type of object. The typeof operator doesn't differentiate between objects and arrays; it treats arrays as objects.
// const keys = Object.keys(tinderUser);
//console.log(Array.isArray(keys)); // true - confirms it's an array
console.log(Object.keys(tinderUser));
console.log(typeof(Object.keys(tinderUser)));

 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));



// for the following , kia apk pas isLoggedIn nam ki propert hai => results are boolean
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));






//*********** Object de structure and course API


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// 2 ways of destructuring
// * destructuture objects simply
const {courseInstructor} = course
console.log(courseInstructor);

//* destructure and then give the name of your own choice => like here: instructor is given
const {courseInstructor: instructor} = course
console.log(instructor);

// API => values ati hei backend se, unko ap kese likhty hei

// ************* JSON FORMAT
// In JSON, keys must be enclosed in double quotes, but values are enclosed in double quotes only if they are strings. Here is a breakdown:

// - **Keys**: Always enclosed in double quotes.
// - **String values**: Enclosed in double quotes.
// - **Numeric values**: Not enclosed in quotes.
// - **Boolean values**: Not enclosed in quotes.
// - **Null values**: Not enclosed in quotes.
// - **Array and Object values**: Not enclosed in quotes, but their contents follow the same rules recursively.

// Here is a JSON example illustrating these rules:

// ```json
// {
//   "name": "Jane Doe",           // String value
//   "age": 25,                    // Numeric value
//   "isStudent": true,            // Boolean value
//   "skills": [                   // Array value
//     "HTML",
//     "CSS",
//     "JavaScript"
//   ],
//   "address": {                  // Object value
//     "street": "456 Elm St",
//     "city": "Othertown",
//     "state": "TX",
//     "postalCode": "67890"
//   },
//   "email": null                 // Null value
// }
// ```

// kahyn bar apko API se data array ki format mai bhi milta hai (array k ander objects)
[
    {},
    {},
    {}
]





// ***************************** SHALLOW COPY AND DEEP COPY
// const username1 = 'Anurag'
// let username2 = username1 // yahan tk ab username1 and username2 ka memory address same hai

// username2 = username2 + ' Singh' => lykin jese hmny yh likha to username1 and username2 ka address change hogaya

// ********** copying array

const fruits = ['Mango', 'Apple', 'Orange']
// const myFruits = fruits // ese copy kia to dono ka address same hai memory mai

// myFruits.push('Dates')
// myFruits.push('Grapes')

// Object.assign(myFruits, fruits) // ese copy kia to dono ka address different hai memory mai

const myFruits = [...fruits] // ese copy kryn gy to bhi dono ka memory address different hai

// const myFruits = [].concat(fruits) // ese copy kryn gy to bhi dono ka memory address different hai

// const myFruits = fruits.slice() // ese copy kryn gy to bhi dono ka memory address different hai




// **** Copying Objects
const user1 = {
  firstName: 'Anurag',
  lastName: 'Singh',
  pata: {
    city: 'Delhi',
    pincode: 989888,
  },
  subject: ['Physics', 'CS', 'Maths']
}

const user3 = user1  // ese copy kia to user1 and user3 ka address same hai memory mai

// Shallow Copy

// const user2 = {}
// Object.assign(user2, user1) // ese copy kia to user1 and user2 ka address different hai memory mai lykin pata (object) ka address same hai and subject(array) ka address bhi same hai


const user2 = { ...user1 } // ese copy kia tb bhi memory mai address different hai user1 and user3 ka lykin pata ka address same hai


// another example
let students = [{id:1, name: "harry", age:25},{id:2, name: "amit", age:45}]
let studentsCopy = [...students];
studentsCopy.age = 28;
console.log(students[1]);
console.log(studentsCopy[1]) // in both age will become 28 
// the reason is even though the array reference is replaces , the object reference is still same
// to overcome above, use following

// let studentsCopy = JSON.parse(JSON.stringify(students));// this will completely change all the references





// Shallow Copy
// A shallow copy of an object creates a new object with the same properties as the original object. However, if the properties are references to other objects, the references are copied, meaning that the new object and the original object will share the same referenced objects.

// Using Object.assign()
// Using the Spread Operator

// Deep Copy
// A deep copy of an object creates a new object with the same properties as the original object. If the properties are references to other objects, new objects are created for those properties as well, so the new object and the original object do not share the same referenced objects.

// Using JSON.parse() and JSON.stringify()