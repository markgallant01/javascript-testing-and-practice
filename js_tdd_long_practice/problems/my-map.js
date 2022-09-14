function myMap(inputArray, callback) {
  // Your code here
  if (callback === undefined) {
    callback = x => x;
  }

  let newArr = [];
  inputArray.forEach((x) => {
    newArr.push(callback(x));
  });

  return newArr;
}

module.exports = myMap;
