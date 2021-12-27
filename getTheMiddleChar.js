// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028/javascript

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
// The middle character(s) of the word represented as a string.

// given: string
// return: middle character (odd) or middle 2 characters (even)

function getMiddle(s)
{
  // check str length to see if odd
  let firstMid = s.split('')[Math.floor(s.length / 2)]
  let secondMid = s.split('')[(s.length / 2) - 1]
  
  if(s.length % 2 === 1){
    // odd -> split by each char -> return Math.floor(str.length/2)
    return firstMid
    
  } else {
    // even -> split -> return str.length/2 + (str.length/2) - 1
    return secondMid + firstMid
    
  }
}

console.log(getMiddle("bob"), "o") // length: 3, index: 1
console.log(getMiddle("five"), "iv") // length: 4, indexes: 1 and 2
console.log(getMiddle("waluigi"), "u") // length: 7, index: 3
