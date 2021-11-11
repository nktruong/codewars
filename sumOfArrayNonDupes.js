// Sum of array singles
// https://www.codewars.com/kata/59f11118a5e129e591000134/solutions/javascript

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// array of numbers: two numbers occur *once* and the rest occur *twice*

function repeats(arr){
  // filter through dupes -> reduce to get sum
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((a,b) => a+b)
  
  //return sum of nums
  
}

console.log(repeats([4,5,7,5,4,8], 15))
console.log(repeats([9, 10, 19, 13, 19, 13], 19))
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11], 12))
