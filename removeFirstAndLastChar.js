// Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/javascript

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// get: string
// give: string but without the first and last characters

function removeChar(str){
 // take out the first and last characters
  
  return str.slice(1, -1)

};

console.log(removeChar('place'), 'lac')
console.log(removeChar('person'), 'erso')
console.log(removeChar('car'), 'a')
