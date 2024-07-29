// Immediately Invoked Function Expressions (IIFE) => jese hi function likha, usko foran hi execute krwana hai
// why do we need it? 1)when we write database connection files, we want k jese hi application run ho wese hi foran se uski file k ander hmara database connection start ho jay
//2) global scope k pollution se problem hoti hai kahyn bar to global scope k jo variables hei ya jo bhi wahandeclare hai usk pollution ko htany k liye hm ny IIFE ka use kia
//()() function defn and function execution



// * named IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // yh function immediately invoke to ho gaya lykin isko patah nhi hai k actually mai context kpo rokna kahan hai so after this function semicolon is must


//* IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// to write two IIFEs , semicolon is must