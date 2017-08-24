/** 1.6 - String Compression
 *
 * Implement a method to perform basic string compression using
 * the counts of repeated characters. For example, the string
 * 'aabcccccaaa' would become 'a2b1c5a3'. If the compressed string
 * would not become smaller than the original string, your method
 * should return the original string. You can assume the string has
 * only uppercase and lowercase letters (a - z).
*/

const compress = (string) => {
  let newString = string[0];
  let count = 1;

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      count++;
    }
    else {
      newString += count + string[i];
      count = 1;
    }
  }
  newString += count;
  return (newString.length > string.length ? string : newString);
}

if (require.main === module) {
  console.log(compress(process.argv[2]));
}
