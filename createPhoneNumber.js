// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/javascript

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


// Parameters - array of 10 integers between 0 and 9

function createPhoneNumber(numbers){
  // shift ( for 0th index and push ") " for 4th-5th index
  // push - in the 9th index
  
  // return string
  
  return "(" + numbers[0] + numbers[1] + numbers[2] + ") "
    + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9] 
}

// Better Solution (maybe, at least it is easier to view)
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
  
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format;
// }

// Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "(123) 456-7890")
createPhoneNumber([9, 1, 7, 3, 3, 9, 6, 2, 6, 6], "(917) 339-6266")
