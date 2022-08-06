// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static introducePeople(persons) {
    // check for array
    if (!Array.isArray(persons)) {
      console.log('introducePeople only takes an array as an' +
                  ' argument.');
    }
    else {
      // check that every element is a person instance
      let error = false;
      persons.forEach(person => {
        if (!(person instanceof Person)) {
          error = true;
        }
      });

      if (!error) {
        persons.forEach(person => {
          person.introduce();
        });
      }
      else {
        console.log('All items in array must be Person class' +
                    ' instances.');
      }
    }
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
