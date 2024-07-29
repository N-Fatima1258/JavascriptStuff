
//v8  nd   v8_debug
// When you use v8-debug version, some special utilities and functions get unlocked.

// for this lecture, you need to install some other tools
// for now, i am just making some NOTEs

// const myArr = [];
// %DebugPrint(myArr)

/*
Two types of arrays: 
continuous(PACKED) arrays and holey arrays (arrays with holes)
****continuous arrays:
SMI (small integer)
Packed element
Double (float, string, function)

*Holey arrays:
SMI (small integer)
Packed elementsz
Double (float, string, function)

hr language mai arrays ka optimization hota hai
Based k arrays k ander kia elements hei, interally javascript usko bht optimize krta hai. If you have taken an array in which there are values at position 1 , 2 ,3 . To sirf itna nhi k values hei, agr string hai to alag optimization, numbers hei to alag optimization.

If in your array, there are elemets at 1, 2 and 4 position but not at 3. Because there is a whole in your array, to alag optimization hoga. Optmization bhi on the basis of numbers,strings etc. Most of the optimization si done by v8 engine


const arr= [1,2,3,,5] // holey array
 */
//PACKED_SMI_ELEMENTS => best type of array(It is most optimized) => you can only include numbers in this arrays, not even decimal type
const arrTwo = [1,2,3,4,5]

//now it is PACKED_DOUBLE_ELEMENTS
arrTwo.push(6.0)

//now it is PACKED ELEMENTS
arrTwo.push('7') // now its optmization is different. Because ab compiler ko dekhna pry ga kio k is mai numbers bhi hei, strings, decimal bhi

// jb aik dfa apny PACKED_SMI_ELEMENTS se PACKED_DOUBLE_SMi bna dia to ap usy dobaraa PACKED_SMI_ELEMENTS nhi bna skty even if you remove that value which you have pushed {arrTwo.push(6.0)}. You comipler cannot do such type of optimization. Aik bar downgrade hogaya to again upgrade nhi ho skta 


// HOLEY_ELEMENTS because it has many different data types and also holes
arrTwo[10] = 11
console.log(arrTwo) // yh jo 3 empty spaces ayn hei, these have made our array less optimized and also they have introduced holes in our arrays
 
console.log(arrTwo.length) //11
console.log(arrTwo[9]) //undefined
console.log(arrTwo[19]) //undefined


/*
How array find value of any index?
1)bound check:
array is starting from position 1 and its length is 11. And you are asking beyound length say 17 , it will respond with undefined quickly => quickly

2) holes are very expensive in JS. hasOwnProerty check is exepnsive in itself. 
suppose you want to access index 9 (hole)
js will make followig checks:
bound check is passed
And then it will check again and again because of the prototypal nature of javascript

hasOwnProprty(arrTwo, 9)
hasOwnProprty(arrTwo.prototype, 9)
hasOwnProprty(Object.prototype, 9)
 --- if you run hasOwnProperty 3c times , obviously optimization is very low. Thats why it is recommended not to have holes in arrays
*/

const arrThree = [1,2,3,4,5]
console.log(arrThree); // bound check : true ,,, continuous hai undeifned a nhi skta to simply return the answer

// PACKED_SMI (most optimized) P_DoUBLE >  PACKED ELEMENTS
 // H_SMI > H_DOUBLE > H_PACKED

 //  const array = [1,2,3,4,5] => suppose you have deleted a position in array in your code. it will be downgraded to hole and you cannot upgrade it again 

 const arrFour = new Array(3) // till now, not addeda ny elements. So compiler will assign HOLLEY_SMI_ELEMENTS
 arrFour[0] = '1' // LAst downgrade : HOLEY_ELEMENTS , now it will remain HOLEY forever
 arrFour[1] = '2' 
 arrFour[2] = '3'
 
 

 // When we know that we are creating an array and we have to pushg some elements in the array. Then whats the purpose of making the array empty in the beginning? And introduncting holes?
 // Infact we can follow the following approach to make optimization little better than the previous approach
 const arrFive = [] // ab mainy 3 positions ko empty krny ki bjay aik array lia hai jo already empty hai. in this way => SMI ... NOw you can push
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS
 // The above approach is  much better



 const arrSix = [1,2,3,4,5]
 arrSix.push(NaN) // now it is PACKED_DOUBLE
 

 const arrSeven = [1,2,3,4,5]
 arrSeven.push(NaN) // now it is PACKED_DOUBLE

// aik dfa apny downgrade kr dia , to dobara ap upgrade nhi krskty. Chahy ap usy remoev bhi krdo


// NOTESSSSS: jitny bhi apko bedefault methods ya loops waghrra mil rhy heii ap unko prefer kryn . Ap apny trf se jo loops ya methods bnaty hei unki jagah default methods use kryn because  it is possible k apny usy 2 ya 4 cases k liye optimixe kia ho lykin browser ny usy bht se cases k liye optimize kr rakha hota hai

