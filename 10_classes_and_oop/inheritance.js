class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) //super keyword  behind the scenes khud hi patah lga ly ga k kon si class extend kr rhy thy, us class k constructor mai jay ga (this subclass ka ly k jay ga), and wahan py jak username set krdy ga. And then you can access suername in subclass
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse();
chai.logMe()
const masalaChai =  new User("masalaChai")
masalaChai.logMe()
console.log(chai === masalaChai) //false
console.log(chai === Teacher)// false
console.log(chai instanceof Teacher) //true
console.log(chai instanceof User); //true


// Case 1: Not Defining a Constructor in Teacher
// If you don't define a constructor in the Teacher class, the constructor of the User class will be automatically used. This means that when you create an instance of Teacher, it will use the User constructor.

// Case 2: Defining a Constructor in Teacher
// If you define a constructor in the Teacher class, it will overwrite the inherited constructor from the User class. However, you can still call the User constructor using super().