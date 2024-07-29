// let score = "33";
//console.log(typeof score);
//console.log(typeof(score));
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// let score = "33abc";
//console.log(typeof score); //string
//console.log(typeof(score));
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber);//number
//console.log(valueInNumber); //NaN

// let score = null;
// let score = undefined;
// let score = true;
// let score = false;

// "33" => 33
// "33abc" => yh convert nhi ho pa rha,,, NaN ,, In JavaScript, NaN stands for "Not-a-Number." It is a value that represents a computational error or an undefined or unrepresentable number.

// console.log(typeof NaN); //number
// console.log(0 / 0); // NaN
// console.log(Number("hello")); // NaN
// console.log(undefined + 1); // NaN
// console.log(NaN === NaN); // false




// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true




// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber); // string



// *********************** Operations ***********************

// let value = 3;
// let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2^3
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello";
// let str2 = " hitesh";
// let str3 = str1 + str2;
// console.log(str3); // hello hitesh

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// console.log( (3 + 4) * 5 % 3);

// the above can be Ok for exams but they are usually not used in real world
// must read from the folllowing link: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion




// console.log(+true); //1
//console.log(true+);  // Error
// console.log(+"");




let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
