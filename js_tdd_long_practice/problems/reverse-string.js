module.exports = function reverseString(string) {
  // Your code here
  if (typeof string === 'string') {
    string = string.split('');
    string = string.reverse();
    
    return string.join('');
  }
  else {
    throw new TypeError('must be type: string');
  }
};
