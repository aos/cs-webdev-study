/** 1.9 - String Rotation
 *
 * Assume you have a method 'isSubstring()' which checks if 
 * one word is a substring of another. Given two strings, 's1' and 's2',
 * write code to check if 's2' is a rotation of 's1' using only one 
 * call to 'isSubstring()'.
 *
 * Example:
 * 'waterbottle' is a rotation of 'erbottlewat'
*/

const isSubstring = (s1, s2) => {
  return (s1.indexOf(s2) > -1);
}

const rotation = (s1, s2) => {
  const full = s2 + s2;    

  return isSubstring(full, s1);
}

if (require.main === module) {
  console.log(rotation(process.argv[2], process.argv[3]));
}
