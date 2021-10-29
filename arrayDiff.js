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
