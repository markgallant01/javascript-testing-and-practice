function allTheArgs(func, ...args) {
  // Your code here
  return (...moreArgs) => {
    return func(...args, ...moreArgs);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
