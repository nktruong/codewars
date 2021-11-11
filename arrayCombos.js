// Array combinations
// https://www.codewars.com/kata/59e66e48fc3c499ec5000103/solutions/javascript

// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates. 

// given arr of subarrays

function solve(arr) {
  // map (do each #) -> get set size (only unique #s length) -> reduce (get product)
  return arr.map( subArr => new Set(subArr).size ).reduce((a,c) => a*c, 1)
  
  // return integer (number of unique arrays)
}

console.log(solve([[1,2],[4],[5,6]]), 4)
// 1 2 | 4 | 5 6
// 1,4,5
// 1,4,6
// 2,4,5
// 2,4,6
console.log(solve([[1,2],[4,4],[5,6]]), 4)
// same thing
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)
