
/*
function -> object -> null
array ------^   |
string----------^





*/

// JS has a prototypal behaviour. Agr js ko wo cheex nhi mil rhi jo ap dhondna chah rhy ho to wo oper layers py jak check krti hai. It access parents , grand parents, grand grand parents untill it encounters null. 
// you get classes, this keyword, new keyword and prototypal inheritance through PROTOTYPE
// arrow function k ander this keyword isi liye nhi hota kio k wahan prototype ajata hai
// {Prototype Chain
// The prototype chain is a series of linked objects. When you try to access a property or method on an object, JavaScript first looks for the property or method on the object itself. If it doesn't find it there, it looks at the object's prototype, and then at the prototype's prototype, and so on, until it reaches the end of the chain (usually Object.prototype).}



/*
Array ---> object ---> null (object ka koi parent nhi hota, usk ander jo properties hoti hei wo sb usi ki rehti hei. Yahan pr jo prototype ka reference ata hai wo null ka hi ata hai. Lykin getters setters to milty hei)
String ---> object ---> null 
(at the end we can say k js mai hr cheez apny ap mai aik object hai)
(jo properties object k pas hei wo array or string k pas bhi hei, usable hei ya nhi wo alag bat hai. lykin kio k yh inheritance hai, jo apko grand poarents se mil rha hai wo apko mily ga to shi (use krna hai ya nhi wo ap pr hai{in case of array , strings etc}))
*/









// js mai hr cheez object hoti hi hai. Fucntion is a function and also an object
// function k ander jo properties hei ya jo bhi uski working hai wo function ki hi trah behave krti hai lykin agr ap chahyn to kisi ko bhi aik object ki trah behave krwa skty hei. kio? because at the end of the day, hr cheez milti hai apk object se (Thats why protypal inheritance, hr cheex ko oper se oper ly k jati hai or jati hi rehti hai)
// array ko oper ly k jati hai object py or further object ko oper khyn nhi ly k ja skti, end
// object ka jo prototype hai wo null hi ho jata hai, wese getters or dsetters available hei. you acn add more references if you want but usually we donot add
// so function bhi aik trah se technically reference object  ko hi krta hai {function => object => null}

function multipleBy5(num){
  console.log(this)
    return num*5
}

//This adds a property power to the multipleBy5 function object and assigns it the value 2.
// In JavaScript, functions are objects, so you can add properties to them just like you would with any other object.
// multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); // Some contexts are set by default. bu default jo context set hota hai prototype ka. is console.log ka output us method ka this hai. Prototype methods k sath sath kuch internal properties bhi deta hai.
// Prints the prototype property of the multipleBy5 function, which is an object. In JavaScript, every function has a prototype property that is used when the function is used as a constructor with the new keyword.By default, this prototype object only contains a constructor property that points back to the function itself(an empty object by default but with a constructor pointing back to the function)









//jese arrays k ander prtotypes mai functions hoty hei(slice: slice bhi to aik property hai or isny function  hold kia hua hai). In the similar way, you can inject functions inside your function {object hi to hai akhir kar}
// //Constructor Functions
// Constructor functions are a common way to create objects and set up prototypes. When you use the new keyword with a constructor function, it creates a new object and sets its prototype to the constructor's prototype property.
console.log("hello");
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ // to give current context => use this
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
//const tea = createUser("tea", 250)// error here.Because jb ap ny function(createUser) se usk ander values transfer kryn tb apny usy btaya nhi k mere pas yh additional proerties ayn hei. All this work is handled by new keyword

chai.printMe()





/*
* When we want to apply map on array, we donot write array.prototype.map. Instead we use array.map
 */


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
(*** JS classes k through constructor function nhi deti, js new keyword k through constructor function deti hai. jese claases mai krty hei k new keyword k through aik naya object bnaty hei), (yh aik approach hai lykin bad mai phir claases bhi agayn because people gets confused)



The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

/*Returning an Object: If the constructor explicitly returns an object, that object will be the result of the new expression.
Returning a Primitive Value: If the constructor explicitly returns a primitive value(like a string, number, boolean, null, or undefined), , the value is ignored, and the new object created by the constructor function is returned.*/