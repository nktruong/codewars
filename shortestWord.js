// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// given a non-empty string

function findShort(s){
  
  // split based on SPACES BETWEEN ' ' -> map to get length -> math.min 
  return Math.min(...s.split(' ').map((str) => str.length))
  
  // return length of the shortest word(s) - as integer #
  
}

console.log(findShort('jeon hacks the starbucks'), 3) // shortest is 'the'
console.log(findShort('I am calling you about your cars extended warranty'), 1) // shortest is 'I'
