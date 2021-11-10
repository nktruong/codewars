// String array duplicates
// https://www.codewars.com/kata/59f08f89a5e129c543000069

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
// For example:
//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//     dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces. See test cases for more examples.
// Good luck!

// If you like this Kata, please try:
// Alternate capitalization
// Vowel consonant lexicon

// Params - Arrays with strings (lowercase only, no spaces)

function dup(s) {
  // map 
  // split str ('') by characters in each array
  // filter for letters that are not the same as the prev letter
  // join str together
  
  return s.map(str => str.split('').filter((letter, index, arr) => letter != arr[index-1]).join(''))
};

// Examples
// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']

// dup(["kelless","keenness"]), ['keles','kenes']
