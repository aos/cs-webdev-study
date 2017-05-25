//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  // Leap year:
  // Evenly divisible by 4
  if (input % 4 == 0) {
    // Except every year that is evenly divisible by 100
    if (input % 100 != 0) {
      // Unless the year is also evenly divisible by 400
      if (input % 400 == 0) {

      }
    }
  }
};

Year.prototype.isLeap = function() {
//
// YOUR CODE GOES HERE
//
};

module.exports = Year;
