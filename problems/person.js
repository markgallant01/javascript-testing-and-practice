class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    return `Hello from ${this.name}`;
  }

  visit(person) {
    return `${this.name} visited ${person.name}`;
  }

  switchVisit(person) {
    return `${person.name} visited ${this.name}`;
  }

  update(obj) {
    // check to ensure obj is an object
    if (typeof obj !== 'object') {
      throw new TypeError('obj is not an object');
    }

    // ensure keys exist
    if (obj.name && obj.age) {
      this.name = obj.name;
      this.age = obj.age;
    }
    else {
      throw new TypeError("obj must have properties: 'name' and 'age'");
    }
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    }
    catch {
      return false;
    }
  }

  static _greetAll(arr) {
    let returnArr = [];
    arr.forEach((person) => {
      returnArr.push(person.sayHello());
    });

    return returnArr;
  }
}

module.exports = Person;
