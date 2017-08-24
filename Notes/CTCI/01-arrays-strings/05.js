/* 1.5 - One Away
 *
 * There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 *
 * Given two strings, write a function to check if they are one edit 
 * (or zero edits) away.
 *
 * Example
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
*/

const oneAway = (s1, s2) => {
  
  if (Math.abs(s1.length - s2.length) > 1) return false;

  const s1Map = {};
  let missing = false;

  for (let i = 0; i < s1.length; i++) {
    s1Map[s1[i]] = (s1Map[s1[i]] ? s1Map[s1[i]]++ : 1);
  }
  
  for (let j = 0; j < s2.length; j++) {
    if (s2[j] in s1Map) {
      s1Map[s2[j]]--;

      if (s1Map[s2[j]] < -1) {
        return false;
      }

    } 
    else {
      if (missing) return false;
      missing = true;
    }
  }
  return true;
}

const CTCI = (s1, s2) => {
  // Length check
  if (Math.abs(s1.length - s2.length) > 1) return false;

  // Get shorter and longer strings
  let string1 = s1.length < s2.length ? s1 : s2;
  let string2 = s1.length < s2.length ? s2 : s1;

  let index1 = 0;
  let index2 = 0;

  let diff = false;

  while (index2 < s2.length && index1 < s1.length) {
    if (s1[index1] != s2[index2]) {

      if (diff) return false;
      diff = true;

      if (s1.length == s2.length) {
        index1++; // On replace, move shorter pointer
      }
    }
    else {
      index1++; // If matching, move shorter pointer
    }
    index2++; // Always move pointer for longer string
  }
  return true;
}

if (require.main === module) {
  console.log(oneAway(process.argv[2], process.argv[3]));
}
