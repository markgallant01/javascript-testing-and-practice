const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

  describe("Word constructor function", function () {
    let word = new Word('applesauce');

    it('should have a "word" property', function () {
      expect(word).to.have.property('word');
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal('applesauce');
    });

  });

  describe("removeVowels function", function () {
    let word = new Word('applesauce');
    let testWord = word.removeVowels();
    
    it("should return the word with all vowels removed", function () {
      expect(testWord).to.equal('pplsc');
    });

  });

  describe("removeConsonants function", function () {
    let word = new Word('applesauce');
    let testWord = word.removeConsonants();

    it("should return the word with the consonants removed", function () {
      expect(testWord).to.equal('aeaue');
    });
  });
  
  describe("pigLatin function", function () {
    let word = new Word('applesauce');
    let testWord = word.pigLatin();

    it("should return the word converted to pig latin", function () {
      expect(testWord).to.equal('applesauceyay');
    });
  });
});
