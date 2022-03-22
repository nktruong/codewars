// Remove String Spaces
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// Simple, remove the spaces from the string, then return the resultant string.

// given: string with spaces
// return: string without spaces

function noSpace(x){
  // split by space -> join them w/o space
  return x.split(" ").join("")

}

console.log(noSpace("yo dude"), "yodude")
console.log(noSpace(" shadowbaker "), " shadowbaker")
