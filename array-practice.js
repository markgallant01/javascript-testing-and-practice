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

  // Your code here
};

const evenNumOfChars = arr => {

  // Your code here
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
