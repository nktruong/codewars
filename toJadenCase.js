// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


String.prototype.toJadenCase = function () {
  //...
  // split array into strings
  // capitalize the start of each string
  let words = this.split(" ")
  const JadenCase = words.map(letter => letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase())
  return JadenCase.join(" ")
};
