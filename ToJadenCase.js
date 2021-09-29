String.prototype.toJadenCase = function () {
  //...
  // split array into strings
  // capitalize the start of each string
  let words = this.split(" ")
  const JadenCase = words.map(letter => letter.charAt(0).toUpperCase() + letter.substr(1).toLowerCase())
  return JadenCase.join(" ")
};
