
//  *************** MAP: 
// The map method in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array but instead returns a new array.
// let newArray = array.map(function(currentValue, index, array) {
//    //return element for newArray
// });
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array (optional).
// array: The array map was called upon (optional).




const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
//console.log(newNums)






//If you have an array of objects, you can use map to create a new array with a modified structure:
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992 },
    { title: 'Book Three', genre: 'History', publish: 1999 },
  ];
  
  // Create an array of book titles
  let bookTitles = books.map(book => book.title);
  
  console.log(bookTitles); // ['Book One', 'Book Two', 'Book Three']
  







//*********** Chaining : ist chain ka jo bhi result hota hai wo 2nd chain mai pass hota hai 
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);