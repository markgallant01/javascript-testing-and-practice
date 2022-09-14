// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch (e) {
  if (e instanceof TypeError) {
    console.error(e.message);
  }
}

// 2.
// tests
try {
  sayName("Alex");
  sayName(1);
} catch (e) {
  console.error(e.name + ': ' + e.message);
}
// Your code here
function sayName(name) {
  if (typeof name === 'string') {
    console.log(name);
  }
  else {
    throw new TypeError('Invalid name! Must be a string!');
  }
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet();
}
catch (e) {
  console.log('Hello world!');
}

