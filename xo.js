// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// given: string
// return: boolean if string has the same amount of 'x's and 'o's, or none then true

function XO(str) {
    // split => for loop: increase counter when it is equal to 'x' or 'o'
    let xCount = 0
    let oCount = 0
  
    str = str.toLowerCase().split('')
  
    for (let i = 0; i < str.length; i++){
      if (str[i] === 'x'){
        xCount++
      } else if (str[i] === 'o'){
        oCount++
      }
    }
  
    // return result of the check if the two vars are the same
    return (xCount===oCount)
}

console.log(XO('boom'), false)
console.log(XO('xoXo'), true)
