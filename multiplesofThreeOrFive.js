// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/javascript

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

/**
 *  My Solution
 */

// sum of multiples
// receive # (can be 0 or negative)

function solution(num){
  // -- if 3 or more than 3 -- 
  // loop through numbers below given param -> check if divis by 3 or 5 -> if so add that num to overall sum -> return #
  
  // -- else --
  // return 0
  
  let sum = 0 // initiate sum as number 0
  
  if(num >= 3){
    for(let i=num-1; i>=3; i--){
      if (i % 3 === 0 || i % 5 === 0 ){
        sum += i
      }
    }
    return sum
  } else {
    return 0
  }
  
  // return 0 if negative, or sum if not
}

console.log(solution(-1), 0) // if negative, return 0
console.log(solution(0), 0)  // 0
console.log(solution(2), 0)  // no numbers below it
console.log(solution(4), 3) // 3 is a multiple of 3 but nothing else is (or mult of 5) 3 = 3
console.log(solution(6), 8) // 3 is a mult of 3, 5 is a mult of 5.                 3 + 5 = 8
console.log(solution(16), 60) // 3, 5, 6, 9, 10, 12, 15.                3+5+6+9+10+12+15 = 60

console.log(solution(10), 23) // 3, 5, 9, 10
