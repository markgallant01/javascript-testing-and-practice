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
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

const secondLargest = arr => {
  if (arr.length < 2) {
    return undefined;
  }
  else {
    let largestValue = arr[0];
    let largestIndex = 0;
    // loop through arr and find largest value
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largestValue) {
        largestIndex = i;
        largestValue = arr[i];
      }
    }

    arr.splice(largestIndex, 1);

    // loop through again to find second largest value
    largestValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largestValue) {
        largestValue = arr[i];
      }
    }

    return largestValue;
  }
};

const shuffle = (arr) => {
  let result = [];
  // loop the arr and randomly choose to shift() or push()
  for (let i = 0; i < arr.length; i++) {
    let choice = Math.floor(Math.random() * 2);
    if (choice === 0) {
      result.unshift(arr[i]);
    }
    else {
      result.push(arr[i]);
    }
  }

  return result;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
