// Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// get: string (only letters and spaces)
// return: string with 5 or more letters reversed. words in same order as they appear

function spinWords(string){
  // split str by space -> map: if 5 or more, then split.reverse.join -> split with space
  return string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join(''): word).join(' ')
}

console.log(spinWords("woah"), "woah")
console.log(spinWords("dominos pizza"), "sonimod azzip")
console.log(spinWords("testing a new product"), "gnitset a new tcudorp")

// damnn bobby

// ['damnn', 'bobby'] split str by space
// [['d','a','m','n','n'], ['b','o','b','b','y']] split again
// [['n','n','m','a','d'], ['y','b','b','o','b']] reverse
// [['nnmad'],['ybbob']] join
// ['nnmad ybbob'] join with space
