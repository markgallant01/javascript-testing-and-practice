/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    // Your code here
    let vowels = 'aeiou';
    let lastVowelIndex;
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            lastVowelIndex = i;
        }
    }

    let result = '';
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (i !== lastVowelIndex) {
            result += letter;
        }
    }

    return result;
};

let hipsterfy = function(sentence) {
    // Your code here
    let words = sentence.split(' ');
    words = words.map(function(word) {
        return removeLastVowel(word);
    });
    return words.join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
