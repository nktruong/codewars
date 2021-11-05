// Remove consecutive duplicate words
// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/solutions/javascript

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
  return s.split(' ').filter((w, index, array) => w != array[index+1]).join(' ')
}
// get string w duplicates
// check if next value is the same
// return set

// example
// string: apple sponge sponge beta
// return string: apple sponge beta
