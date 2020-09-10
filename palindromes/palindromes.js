const palindromes = function (testString) {
  testString = testString.replace(/[^\w]|_/g, "");
  testString = testString.toLowerCase();

  for (let i = 0; i < testString.length; i++) {
    let charOne = testString[i];
    let charTwo = testString[testString.length - 1 - i];

    if (charOne !== charTwo) {
      return false;
    }
  }
  return true;
};

module.exports = palindromes;

// palindromes("racecar");
