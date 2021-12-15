// Sum of Digits
// https://www.codewars.com/kata/541c8630095125aba6000c00

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// get: number (always positive? will it be a decimal? will it ever not be a number?)
// return: non-negative integer, the sum of the digits of #

function digital_root(n) {
  // turn into string => split into array => reduce to get sum => check if single digit (array.length) => if not reduce again and again
  let numbers = (n + '').split('')
  
  if(numbers.length === 1){
    return parseInt(numbers)
  } else {
    return digital_root(numbers.reduce((num1, num2) => parseInt(num1) + parseInt(num2)))
  }
}

console.log(digital_root(14), 5)
console.log(digital_root(16), 7)
console.log(digital_root(456), 6) // 4 + 5 + 6 = 15 --> 1 + 5 = 6
