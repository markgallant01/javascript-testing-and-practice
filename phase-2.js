const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let result = [];
  let limit = increment * 10;
  for (let i = increment; i <= limit; i += increment) {
    result.push(addNums(i));
  }
  return result;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in

}

module.exports = [addNums10, addManyNums10];
