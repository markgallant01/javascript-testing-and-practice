const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString()', function() {

  it('should return a reversed string', function() {
    expect(reverseString('fun')).to.equal('nuf');
  });

  it('should throw a TypeError when not called on string', function() {
    expect(() => reverseString(5)).to.throw();
  });

});

