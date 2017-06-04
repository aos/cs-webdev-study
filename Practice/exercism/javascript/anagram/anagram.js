/**
 * Exercism
 * JavaScript Track
 * Problem 11: Anagram
 * 
 * Solution by Aos
 * 6/XX/2017
**/

const Anagram = function() {}

Anagram.prototype.matches = function(array) {
  let word = ['w', 'o', 'r', 'd', 's'];

  let match = 'word'.split('');

  match.forEach((e) => {
    if (e in word) {
      let index = word.indexOf(e);
      word.splice(e, 1);
    }
  })
  console.log(word);
}


module.exports = Angram;