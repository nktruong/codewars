// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
// run through arrays
// 1 by 1
// if theres one value thats the same
// dont add it
// else if its unique
// then add it to new array

// better solution with quadratic complexity
  let newSet = new Set(b)
  return a.filter(n => !newSet.has(n))
  
// old solution that was linear complexity
//   return a.filter(r=> !b.includes(r))
}
