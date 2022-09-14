const Person = require('./person');

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    let gpa1 = student1.GPA;
    let gpa2 = student2.GPA;
    
    if (gpa1 > gpa2) {
      return `${student1.firstName} ${student1.lastName} has the` +
              ` higher GPA.`;
    }
    else if (gpa2 > gpa1) {
      return `${student2.firstName} ${student2.lastName} has the` +
              ` higher GPA.`;
    }
    else {
      return `Both students have the same GPA.`;
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
