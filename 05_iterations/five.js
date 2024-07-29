// for each loop direct hi arrays mai properties mai add hai
// in chrome console , write an array and in prototypes there is forEach loop (jese length, push, pop or map property hai array ki)

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )





// coding.forEach( (item) => {
//     console.log(item);
// } )





// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) // donot execute the function here, just give the reference



// hr aik element k pas pory k pory array ka access bhi hai
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {    
    console.log(item.languageName);
} )


