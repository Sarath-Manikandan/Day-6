// Write a “person” class to hold all the details.

// Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, gender, occupation) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    getOccupation() {
      return this.occupation;
    }
  
    setOccupation(occupation) {
      this.occupation = occupation;
    }
  }
  
  let person1 = new Person("John", "Doe", 25, "Male", "Engineer");
  console.log(person1.firstName); 
console.log(person1.getFullName()); 
console.log(person1.getOccupation()); 
person1.setOccupation("Developer");
console.log(person1.getOccupation()); 

