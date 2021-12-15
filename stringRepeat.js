// String repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/javascript

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// METHOD SOLUTION

function repeatStr (n, s) {
  // repeat s, n # of times
  return s.repeat(n) 
}

// FOR LOOP SOLUTION

// get: number and string (is the # ever 0? less than 0?)
// return: a longer string

function repeatStr (n, s) {
  // for loop => append s to result n # of times
  let combo = ''
  for(let i=0; i<n; i++){
    combo += s
  }
  
  return combo;
}

console.log(repeatStr(6, "I"), "IIIIII")
console.log(repeatStr(2, "bob"), "bobbob")
console.log(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello")
