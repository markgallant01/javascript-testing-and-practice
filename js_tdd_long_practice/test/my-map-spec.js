// Your code here
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

const myMap = require('../problems/my-map');

describe('myMap(arr, cb)', function() {
  let a1;

  beforeEach(function() {
    a1 = [1,2,3];
  });

  it('should call cb on every element of arr', function() {
    let a2 = myMap(a1, x => x * 2);

    expect(a2).to.deep.equal([2,4,6]);
  });

  it('should return the input if no cb is provided', function() {
    let a2 = myMap(a1);
    
    expect(a2).to.deep.equal([1,2,3]);
  });

  it('should not mutate the passed-in array', function() {
    let a2 = myMap(a1, x => x * 2);

    expect(a1).to.deep.equal([1,2,3]);
  });

  it('should not call Array.map()', function() {
    const spy = chai.spy.on(a1, 'map');
    expect(spy).to.not.have.been.called;
  });

  it('should invoke cb once for each element of arr', function() {
    let l = a1.length;
    const spyCB = chai.spy(x => x * 2);
    let a2 = myMap(a1, spyCB);

    expect(spyCB).to.have.been.called.exactly(l);
  });
});

