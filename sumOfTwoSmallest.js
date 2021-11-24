// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// array of at least 4 positive integers (no floats, no negatives)

function sumTwoSmallestNumbers(numbers) {
  
  // spread arr -> sort (a-b) -> add arr[0] + arr[1]
  let sorted = [...numbers].sort((a,b) => a-b)
  
  // return sum of two *lowest* #s
  return sorted[0] + sorted[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]), 7) // bc 5 + 2 = 7
console.log(sumTwoSmallestNumbers([1, 2, 3, 4, 5]), 3) // bc 1 + 2 = 3
console.log(sumTwoSmallestNumbers([1, 2, 3, 4]), 3) // bc 1 + 2 = 3
