// Your code here
const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree()', function() {
  it('should return 3', function() {
    let x = returnsThree();
    expect(x).to.equal(3);
  });
});

describe('reciprocal()', function() {
});

