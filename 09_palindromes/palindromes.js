const palindromes = function (string) {
  const parsedString = string.replace(/[^A-Za-z]/g, '').toLowerCase();
  return parsedString.split("").reverse().join("") === parsedString;
  // for (let i = 1; i <= parseInt(lettersOnly.length / 2); i++) {
  //   if (lettersOnly.at(i - 1) !== lettersOnly.at(-i)) return false;
  // }
  // return true;
};

// Do not edit below this line
module.exports = palindromes;
