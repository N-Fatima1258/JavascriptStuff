// Dates
//Date is an Object in Jscript
// jan 1 , 1970 se hi hmari dates calculate hoti hei
let myDate = new Date()
console.log(myDate)
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
console.log(typeof myDate);

// Months start from 0 in javascript when you write single digit as 0 , and starts from 01 when you write in mm format

// to create specific date
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString());

myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate)
console.log(myCreatedDate.toLocaleString());


 myCreatedDate = new Date("2023-01-14")
 console.log(myCreatedDate)

myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate)

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
 console.log(myTimeStamp); // 1st jan 1970 se ly kr abhi tk ka timestamp hai in milli seconds
console.log(myCreatedDate.getTime());
 console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

