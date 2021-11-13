// You're a square!
// Sept 14 2021
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/javascript

// Task: Given an integral number, determine if it's a square number.
// Examples:
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// runs n through Square Root method, checks if there is a remainder to see if it is a perfect square.
function isSquare(n) {
  return Math.sqrt(n) & 1 === 0; 
}
