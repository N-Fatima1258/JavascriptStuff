
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyNAme => function reference
// sayMyName() => function execution

//here they are parameters
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
//here they are called as arguments
// addTwoNumbers(3,4);
// addTwoNumbers(3,"5")
// addTwoNumbers(3, null)



function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);




function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        // yh return statement bhi undefined hi return kry gi
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())  // agr kuch bhi pas nhi kia to output will be: undefined just logged in
//agr empty string pas ki hai "" to output will be   (space) just logged in

// the following three statements will run PLease enter a username (incase if default username is not provided)
console.log(loginUserMessage()) 
console.log(loginUserMessage(undefined))
//oper waly dono default value sam ly lyn gy 
//lykin nichy wala default value nhi ly ga and it will execute  PLease enter a username
console.log(loginUserMessage(null))

// In JavaScript, default function parameters are used when the argument is undefined. If null or any other value (including falsy values) is explicitly passed to the function, that value will be used instead of the default.
//if no argument is provided, username is undefined.








// *usimg REST OPERATOR in function => jitni bhi values ap function mai pas kro gy wo sb (...) ki wajah se aik array mai add hoti jayn gi
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000)) //o/p [200,400,500,2000]



//* lykin agr ese likha to 200 or 400 to val1 or val2 mai store ho jayn gi or remaing values array mai chli jayn gi
function calculateCartPrice1(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice1(200, 400, 500, 2000))//o/p [500, 2000]


// passing objects to a function


const user = {
    username: "hitesh",
    prices: 199
}
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


//passing array to function

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));



// just for knowledge : Any BigInt that is not 0n (e.g., 1n)