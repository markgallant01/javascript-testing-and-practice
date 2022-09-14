/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let repeatingTranslate = function(sentence) {
    // Your code here
    let words = sentence.split(' ');
    words = words.map(function(word) {
        return translateWord(word);
    });

    return words.join(' ');
};


let translateWord = function(word) {
    // Your code here
    let vowels = 'aeiou';

    if (word.length < 3) {
        return word;
    }
    else {
        // ends with vowel?
        if (vowels.includes(word[word.length - 1])) {
            return word + word;
        }
        else {
            // ends with consonant
            let index = lastVowelIndex(word);
            return word + word.slice(index);
        }
    }
};


let lastVowelIndex = function(word) {
    let vowels = 'aeiou';
    let lastIndex = 0;

    word.forEach(function(letter, i) {
        if (vowels.includes(letter)) {
            lastIndex = i;
        }
    });

    return lastIndex;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
