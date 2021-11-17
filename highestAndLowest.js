// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/javascript

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

// get string
// has space separated #s

function highAndLow(numbers){
  // convert str into array -> find max # -> + find min # => return
  let arr = numbers.split(' ')
  console.log(Math.max(...arr))
  
  // return a string w highest and lowest #, space separated
  return Math.max(...arr) + ' ' + Math.min(...arr)
}

// console.log(highAndLow("1 2 3 4 5"), "5 1")
// console.log(highAndLow("1 2 -3 4 5"), "5 -3")
// console.log(highAndLow("1 9 3 4 -5"), "9 -5")
