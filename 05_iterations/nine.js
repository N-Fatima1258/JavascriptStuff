// REDUCE : 
// The reduce method in JavaScript executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The reduce method can be used to perform operations such as summing elements, finding the maximum value, or transforming an array into a different structure.
//SUNTAX:
// array.reduce(function(accumulator, currentValue, index, array) {
//     // return the new accumulator value
//   }, initialValue);
//   accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array (optional).
// array: The array reduce was called upon (optional).
// initialValue: A value to use as the first argument to the first call of the callback (optional).This value will go into the accumulator


//**********
// accumulator is an empty variable
// jo bhi initial value first time dety hei(after function, comma k abd jo value det hei), wo accumulator k ander chli jati hai
// dosri dfa return mai jo function likha hita hai usko solve krk uski value ko accumulator mai dal deta hai. ese hi accumulator mai value ati jay gi

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);




const myTotal1 = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal1);

 


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

