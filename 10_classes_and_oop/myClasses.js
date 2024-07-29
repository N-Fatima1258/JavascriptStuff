// ES6 :In ES6, classes provide a more concise and clear syntax for adding methods to prototypes like in followimg example


// ******** Syntactical Sugar
//bts js mai classes hoti nhi hei, prototypes, objects , functions wohi sb chlta hai

//User actually mai function hai lykin yh object ki trah bhi behave krta hai 
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}
 
const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// ************behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    Userreturn `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());