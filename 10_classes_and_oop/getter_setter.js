//yh sirf wrapper hai, under the hood to wohi prototype waghera chl rha hai
// agr getter use kia to sath mai setter bhi use krna pry ga

// agr getter setter mai bhi this.email hi likha to you have started a race between constructor and these getter setter functions . So the standard practice is using _(underscore) => RangeError: Maximum call stack size exceeded

//Method 1 : getters and setters using classes
// conventionally use an underscore to denote a private property
  
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email)
console.log(hitesh._password);
console.log(hitesh._email)

//output:::::::::
// abchitesh
// H@HITESH.AI
// abc
// h@hitesh.ai







//+++++++++++++++++++++++++++++++++


/*
Getters and setters in JavaScript are special methods used to get and set the values of an object's properties. They allow for encapsulation and control over how a property's value is accessed and modified.

Getters
Getters are methods that provide access to an object's property. They are defined using the get keyword followed by a method name. When you access the property, the getter method is called and returns a value.

Setters
Setters are methods that allow you to set the value of an object's property. They are defined using the set keyword followed by a method name. When you assign a value to the property, the setter method is called and the value is passed to it.*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    
    // Getter for fullName
    get fullName() {
      return` ${this.firstName} ${this.lastName}`;
    },
    
    // Setter for fullName
    set fullName(name) {
      const [first, last] = name.split(' ');
      this.firstName = first;
      this.lastName = last;
    }
  };
  
  console.log(person.fullName); // John Doe
  
  person.fullName = 'Jane Smith';
  console.log(person.firstName); // Jane
  console.log(person.lastName);  // Smith
  console.log(person.fullName);  

//   person.fullName is not a function. It is a property that uses getter and setter methods. When you access or assign to person.fullName, JavaScript invokes the corresponding getter or setter function.





/*
Benefits of Getters and Setters
Encapsulation: Getters and setters provide a way to encapsulate the internal representation of an object's state.
Validation: You can include validation logic within setters to ensure the property values are correct.
Computed Properties: Getters can be used to compute a property value dynamically.
Read-Only Properties: You can use a getter without a setter to create read-only properties.
 */

