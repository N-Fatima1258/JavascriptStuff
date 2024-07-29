// Static Methods
// A static method is a method that belongs to the class itself, rather than to instances of the class. Static methods are often used to create utility functions that are related to the class but do not require any data from class instances.
// Static methods are inherited by subclasses, so you can call the static method on the subclass as well:




class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
 
    // jese hi aik user bny, usko yh id assign ho jay
    // static => is method ka access hr us object ko nhi dena chahty jo is object se instantiate hua hai
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(hitesh.createId()) //error

// console.log(iphone.createId()); // This will throw an error
console.log(Teacher.createId()); // This will work
console.log(User.createId()); // This will work

// In summary, static methods are class-level methods that can be called without an instance of the class. They are useful for utility functions and other functionalities that do not require access to instance-specific data.




class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Static factory method
    static createToyota(model) {
        return new Car('Toyota', model);
    }
}

// Usage of static factory method
const camry = Car.createToyota('Camry');
console.log(camry); // Output: Car { make: 'Toyota', model: 'Camry' }



/*
Why Use Static Methods
Static methods are useful for functionality that is related to the class but not tied to any specific instance. They are typically used for utility or helper functions. Here are some use cases:

Utility Functions: Functions that perform operations related to the class but don’t need instance-specific data.
Factory Methods: Functions that create instances of the class in a certain way.
Configuration Methods: Functions that provide configuration options for the class.
 */

