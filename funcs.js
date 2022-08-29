function isFive(num) {
  // Your code here
  return num === 5 ? true : false;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') {
    throw new TypeError('Input must be a number');
  }
  else {

    if (number % 2 === 0) {
      return false;
    }
    else {
      return true;
    }

  }
}

function myRange(min, max, step = 1) {
  // Your code here
  let returnArray = [];

  for (let i = min; i <= max; i += step) {
    returnArray.push(i);
  }

  return returnArray;
}


module.exports = { isFive, isOdd, myRange };
