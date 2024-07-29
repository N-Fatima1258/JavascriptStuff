
// inside Math object, we want description of the property PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

 console.log(descripter); //=> value of PI is hard coded. writeable property is false . yh kio k impolememntattion hy core js ka hmary browser ya node k ander. ap kitni bhi bar isko overwrite krny ki try kro, yh property itni zada indetail indepth hard coded kr rkhi hai c++ mai or checks bhi hei k ap isko true nhi krs kty 

// console.log(Math.PI);
// Math.PI = 5 // cannot overwrite, the followimg consolelog will give the same ans as the above consoleog
// console.log(Math.PI);


// *********** iski bhi descriptive properties available hei
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// you can change the properties
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}


/*

{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
    */


/* 
enumeration" generally refers to the process of iterating over the properties of an object.

enumerable: true: The property will be included in enumeration. This means if you loop through the properties of the object, this property will appear in the list.
enumerable: false: The property will not be included in enumeration. It will not appear in loops that enumerate properties, though it is still accessible and can be read and written to if it is not configured otherwise.
 */