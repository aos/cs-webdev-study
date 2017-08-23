/** 1.4 - Palindrome Permutation
 *
 * Given a string, write a function to check if it is a permutation
 * of a palindrome. A palindrome is a word or phrase that is the same
 * forwards and backwards. The palindrome does not need to be limited
 * to dictionary words.
 *
 * Example
 * Input: Tact Coa
 * Output: True (permutations: "taco cat", "atco cta", etc.)
**/

const palPerm = (string) => {
  const table = {};
  let lower = string.toLowerCase().replace(/ /g, '');
  let odd = false;

  for (let i = 0; i < lower.length; i++) {
    table[lower[i]] = (table[lower[i]] ? table[lower[i]]++ : 1);
  }

  for (const prop in table) {
    // Check if the entire string has an odd number of characters
    // If it does, then a palindrome would have only one character
    // with an odd number of letters
    if (lower.length & 1) {
      // When odd number of characters is found, set odd flag to true
      if (table[prop] & 1) {
        if (odd) {
          return false;
        }
        odd = true;
      }
    }
    // If string has an even number of characters, then no character
    // count should be odd
    else { 
      if (table[prop] & 1) return false;
    }

    return true;
  }
}

if (require.main === module) {
  console.log("Is string a permutation of a palindrome?\n", palPerm(process.argv[2]));
}
