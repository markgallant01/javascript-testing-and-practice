const { Employee } = require('./employee');

const emp1 = new Employee('John Wick', 'Dog Lover');

setTimeout(emp1.sayName.bind(emp1), 2000);
setTimeout(emp1.sayOccupation.bind(emp1), 3000);

