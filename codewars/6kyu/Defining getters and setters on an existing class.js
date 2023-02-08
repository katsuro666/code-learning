// There is a preloaded class of Person and it needs a new getter and setter. Person is defined with a constructor that takes a first name and a last name, and provides a mean to get the first name, last name, and full name. Bellow is the preloaded class:

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}
// and can be used as so:

// let marcusFenix = new Person('Marcus', 'Fenix');
// console.log(marcusFenix.firstName); // => 'Marcus'
// console.log(marcusFenix.lastName); // => 'Fenix'
// console.log(marcusFenix.getName()); // => 'Marcus Fenix'
// Add a getter of name that returns the full name
// Add a setter of name that modifies first name and last name

Object.defineProperty(Person.prototype, 'name', {
  get: function() {return this.firstName + ' ' + this.lastName},
  set: function(newName) {
    let newNameArr = newName.split(' ')
    this.firstName = newNameArr[0]
    this.lastName = newNameArr[1]
  }
})