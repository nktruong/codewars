// Vowel remover
// https://www.codewars.com/kata/5547929140907378f9000039/javascript

// Create a function called shortcut to remove all the lowercase vowels in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// Don't worry about uppercase vowels.

// get: string (is it only a string? space separated? ever empty?)
// return: string with no lowercase vowels

function shortcut(string){
    
  // split('') to separate by each character => filter ones that are not a,e,i,o,u => return string
  return string.match(/([^aeiou])/g).join('')

}

console.log(shortcut("how are you today?"),"hw r y tdy?")
console.log(shortcut("complain"),"cmpln")
console.log(shortcut("hello"),"hll")
