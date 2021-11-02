var gimme = function (inputArray) {
  return inputArray.indexOf([...inputArray].sort((a,b) => a-b)[1])
};

// BREAKDOWN
// 1. when provided with a triplet
// 2. returns the index!! of the numerical element that lies between the other two elements
// 3. input: an array of three distinct numbers

// Example:
// gimme([29, 12, 5], 1)

// The # in the middle is 12, which is at the index of 1.

// gimme([4, 23, 5], 2)

// The # in the middle is 5, which is at the index of 2.

// Pseudocode:
// sort the array (w/o mutating it)
// find the index of the middle element
// since the input is always 3 #s, mid is always [1]
// so, find the index of the element in the sorted array who's in the middle [1]
