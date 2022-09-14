/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, callback) {
  // determine minimum array value
  let smallestValue = arr[0];
  arr.forEach(function(value) {
    if (value < smallestValue) {
      smallestValue = value;
    }
  });

  if (callback === undefined) {
    return smallestValue;
  }
  else {
    return callback(smallestValue);
  }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
