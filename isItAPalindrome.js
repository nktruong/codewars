// Is it a palindrome?
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/javascript

// Write a function that checks if a given string (case insensitive) is a palindrome.

// given: string
// return: boolean (case-insensitive)

function isPalindrome(x) {
  // reverse string -> see if it's equal to x -> return true or false
  
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('') ? true : false
}

console.log(isPalindrome("leon"), false)
console.log(isPalindrome("leonnoel"), true)
console.log(isPalindrome(""), true)
console.log(isPalindrome("moto"), false)
