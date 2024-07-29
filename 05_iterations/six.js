// ******** for each =>  always return undefined

// const coding = ["js", "ruby", "java", "python", "cpp"]




// const values = coding.forEach( (item) => {
//     console.log(item);
// } )
// console.log(values); // undefined , the function returns undefined




// **** the following snippet will only output undefined. For each loop do not return anythying at all (implicitly or explicitly)
// const values = coding.forEach( (item) => {
//     return item
// } )
// console.log(values);





// *********filter: The filter method is used to create a new array with all elements that pass a test implemented by a provided function. This method doesn't change the original array but RETUNS a new array with the elements that meet the criteria defined in the callback function.

//The filter method in JavaScript returns a new array containing all elements of the calling array that pass the test implemented by the provided function. The function you provide to filter should return true or false for each element of the array. If it returns true, the element is included in the new array; if it returns false, the element is excluded.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
//console.log(newNums)




// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);











 // just a basic thing
  // function greet(){
  //   return 5>4;
  // }
  // const bool = greet();
  // console.log(bool)