/**
 * Exercism
 * JavaScript Track
 * Problem 8: Isogram
 * 
 * Solution by Aos
 * 5/28/2017
*/

const Isogram = function(word) {
  // Clean up word, lowercasing, and removing all non-alphabet characters
  this.word = word.toLowerCase().replace(/[^a-zA-Z\u00C0-\u00ff]/g, "");
}

Isogram.prototype.isIsogram = function() {
  // Make a set (which houses unique values only, and ignores duplicates)
  let stringSet = new Set();
  let counter = 0;

  // Fill out set
  for (let i = 0; i < this.word.length; i++) {
    stringSet.add(this.word[i]);
  }

  // Get length of string set
  for (let elem of stringSet) {
    counter++
  }

  return this.word.length === counter
}

module.exports = Isogram;