const findMinimum = arr => {
  let minimum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }
  return minimum;
};

const runningSum = arr => {
  if (arr.length === 0) {
    return [];
  }
  else {
    let sum = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      sum.push(arr[i] + sum[i-1]);
    }
    return sum;
  }
};

const evenNumOfChars = arr => {
  let evenNumberOfChars = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) {
      evenNumberOfChars.push(arr[i]);
    }
  }
  return evenNumberOfChars.length;
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
