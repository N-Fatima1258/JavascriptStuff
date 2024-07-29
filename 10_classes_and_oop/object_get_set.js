//Method 3: getters and setters using objects

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//factory function
const tea = Object.create(User)
console.log(tea.email);// we have not written tea.email()

// Object.create(User) creates a new object (tea) with User as its prototype. This means tea inherits properties and methods from User.
// When console.log(tea.email) is called, the get email() method from the User prototype is invoked.


// Object.create()
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"