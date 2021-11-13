// Test Your Knowledge Of Function Scope
// https://www.codewars.com/kata/56d344c7fd3a52566700124b/javascript

// Write a function that adds from two invocations.

// All inputs will be integers.

// add(3)(4)  // 7
// add(12)(20) // 32

function add(n1){
  return function(n2) {
    return n1 + n2
  }
}
