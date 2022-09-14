// Your code here
const { expect } = require('chai');
const Person = require('../problems/person');

describe('Person', function() {
  let p, p2;

  beforeEach(function() {
    p = new Person('John Doe', 35);
    p2 = new Person('Elizabeth Swann', 18);
  });

  describe('constructor()', function() {
    it('should set name and age properties', function() {
      expect(p.name).to.equal('John Doe');
      expect(p.age).to.equal(35);
    });
  });

  describe('#sayHello()', function() {
    it('should return a greeting message', function() {
      let message = p.sayHello();
      expect(message).to.equal('Hello from John Doe');
    });
  });

  describe('#visit(otherPerson)', function() {
    it('should return a string stating both persons met', function() {
      let message = p.visit(p2);
      expect(message).to.equal('John Doe visited Elizabeth Swann');
    });
  });

  describe('#switchVisit(otherPerson)', function() {
    it('should return visit message in reverse order', function() {
      let message = p.switchVisit(p2);
      expect(message).to.equal('Elizabeth Swann visited John Doe');
    });
  });

  describe('#update(obj)', function() {
    context('if the incoming argument is not an object', function() {
      it('should throw a TypeError', function() {
        let badCall = () => { p.update('notObject') };
        expect(badCall).to.throw(TypeError);
      });
    });

    context('if the incoming argument is an object', function() {
      it('should update instance properties to match passed-in object',
        function() {

        let argObj = { name: 'Mark Zuck', age: 38 };
        p.update(argObj);
        expect(p.name).to.equal('Mark Zuck');
        expect(p.age).to.equal(38);
      });

      it('should throw TypeError if obj is missing name and age props',
        function() {

        let argObj = { lame: 'a', sage: 1 };
        let badCall = () => { p.update(argObj) };
        expect(badCall).to.throw(TypeError);
      });
    });
  });

  describe('#tryUpdate(obj)', function() {
    describe('attempts to call #update()', function() {
      it('should return true if #update() succeeds', function() {
        let goodObj = { name: 'x', age: 3 };
        let goodReturn = p.tryUpdate(goodObj);
        expect(goodReturn).to.equal(true);
        expect(p.name).to.equal('x');
        expect(p.age).to.equal(3);
      });

      it('should return false if #update() fails', function() {
        let badObj = { x: 'x', y: 'y' };
        let badReturn = p.tryUpdate(badObj);
        expect(badReturn).to.equal(false);
      });
    });
  });

  describe('_greetAll(arr)', function() {
    context('calls #sayHello() on each Person in arr', function() {
      it('should return an array of string messages', function() {
        let people = [p, p2];
        let messages = Person._greetAll(people);
        let correctOutput = [
          'Hello from John Doe',
          'Hello from Elizabeth Swann'
        ];
        expect(messages).to.deep.equal(correctOutput);
      });
    });
  });
  
});

