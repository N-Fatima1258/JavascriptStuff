// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// The loose equality operator (==) in JavaScript performs type coercion to compare values that are not of the same type. However, there are specific rules for how different types are coerced and compared.

//comparing different data types
// console.log("2" > 1); // true, JS automatically converts this "2" into number  ,, typescript donot allow to compare 2 different data types
// console.log("02" > 1); // true,

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0);  // true ,,, the reason is that an equality check == and comparisons > < >= <= worls differently. Comparsions convert null to a number, treating it as 0. That is why 3 is true and 1 is false
//: When you use == to compare null and 0, JavaScript does not attempt to convert null to a number. Instead, it applies specific rules for null.
// The rule for null is that it is only equal to undefined and no other values. Hence, null == 0 evaluates to false.
console.log(null == undefined); // true
console.log(undefined == 0); //f
console.log(undefined > 0); //f
console.log(undefined < 0); //f

// === => strict check
// == mai conversion bhi hony lg jata hai
console.log("2" === 2);  //false


//== in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values. Checks the equality of two operands without considering their type. Compares equality of two operands with their types