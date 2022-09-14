const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  function addNums10(increment) {
    // Fill this in
    let result = [];
    let limit = increment * 10;
    for (let i = increment; i <= limit; i += increment) {
      result.push(addNums(i));
      console.timeLog('t');
    }
    return result;
  }

  console.time('t');
  addNums10(increment);
  console.timeEnd('t');
}

function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
  function addManyNums10(increment) {
    // Fill this in
    let result = [];
    let limit = increment * 10;
    for (let i = increment; i <= limit; i += increment) {
      result.push(addManyNums(i));
    }
    return result;
  }

}

n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
